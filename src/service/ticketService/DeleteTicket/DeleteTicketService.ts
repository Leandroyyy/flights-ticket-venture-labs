import { IFlightRepository } from "../../../repositories/IFlightRepository";
import { ITicketRepository } from "../../../repositories/ITicketRepository";

export class DeleteTicketService {
  constructor(
    private ticketRepository: ITicketRepository,
    private flightRepository: IFlightRepository
  ) {}

  async execute(id: number): Promise<void> {
    const ticket = await this.ticketRepository.findById(id);

    const flight = await this.flightRepository.findById(ticket.flight.id);

    flight.numberSeats+=1;

    await this.flightRepository.update(flight.id , flight);

    await this.ticketRepository
      .remove(id)
      .then()
      .catch(() => {
        throw new Error(`Passagem do id:${id} não encontrado`);
      });
  }
}
