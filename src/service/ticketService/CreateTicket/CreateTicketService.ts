import { IClientsRepository } from "./../../../repositories/IClientRepository";
import { IFlightRepository } from "./../../../repositories/IFlightRepository";
import { ICreateTicketRequestDTO } from "./CreateTicketDTO";
import { ITicketRepository } from "./../../../repositories/ITicketRepository";
import { Ticket } from "../../../entities/Ticket";

export class CreateTicketService {
  constructor(
    private ticketRepository: ITicketRepository,
    private flightRepository: IFlightRepository,
    private clientRepository: IClientsRepository
  ) {}

  async execute(data: ICreateTicketRequestDTO) {
    const ticket = new Ticket(data);

    const { seatNumber, idFlight, idClient } = ticket;


    const flight = await this.flightRepository.findById(idFlight);

    const client = await this.clientRepository.findById(idClient);

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

      const isSeatAvailable = await this.ticketRepository.findSeat(seatNumber, idFlight);
      
    if (isSeatAvailable.length != 0){
      throw new Error("Este assento já está ocupado!");
    }
    
    flight.numberSeats-= 1;

    this.flightRepository.update(idFlight, flight);

    await this.ticketRepository.save(ticket);
  }
}
