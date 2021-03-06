import { Ticket } from "../../../entities/Ticket";
import { IClientsRepository } from "../../../repositories/IClientRepository";
import { IFlightRepository } from "../../../repositories/IFlightRepository";
import { ITicketRepository } from "../../../repositories/ITicketRepository";
import { ICreateTicketRequestDTO } from "./CreateTicketDTO";

export class CreateTicketService {
  constructor(
    private ticketRepository: ITicketRepository,
    private flightRepository: IFlightRepository,
    private clientRepository: IClientsRepository
  ) {}

  async execute(data: ICreateTicketRequestDTO):Promise<void> {
    const ticket = new Ticket(data);

    const { seatNumber, idFlight, idClient } = ticket;

    const flight = await this.flightRepository.findById(idFlight);

    if(!flight) throw new Error("Voo não existe");

    const client = await this.clientRepository.findById(idClient);

    if(!client) throw new Error("Cliente não existe")

    if (
      (flight.isInternational && client.passport.trim() == "") ||
      client.passport == null
    ) {
      throw new Error(
        "Não é possivel concluir passagem internacional, cliente não possui passaporte!"
      );
    }

    if (flight.numberSeats <= 0)
      throw new Error("Infelizmente os assentos estão esgotados");

    const isSeatAvailable = await this.ticketRepository.findSeat(
      seatNumber,
      idFlight
    );

    if (isSeatAvailable.length != 0) {
      throw new Error("Este assento já está ocupado!");
    }

    flight.numberSeats -= 1;

    await this.flightRepository.update(idFlight, flight);

    await this.ticketRepository.save(ticket);
  }
}
