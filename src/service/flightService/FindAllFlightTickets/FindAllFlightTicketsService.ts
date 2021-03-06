import { Ticket } from "../../../entities/Ticket";
import { IFlightRepository } from "../../../repositories/IFlightRepository";
import { transformFlightsTicketDateToString } from "../validations/TransformClientDateToString";

export class FindAllFlightTicketsService {
  constructor(private flightRepository: IFlightRepository) {}

  async execute(id: number): Promise<Ticket[]> {
    const tickets = await this.flightRepository.findAllFlightTickets(id);

    if (!tickets)
      throw new Error(`Cliente não possui nenhuma passagem comprada`);

    return transformFlightsTicketDateToString(tickets);
  }
}
