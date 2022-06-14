import { Flight } from "../../../entities/Flight";
import { IFlightRepository } from "../../../repositories/IFlightRepository";

export class FindAllFlightsService {
  constructor(private flightRepository: IFlightRepository) {}

  async execute(): Promise<Flight[]> {
    return await this.flightRepository.findAll();
  }
}
