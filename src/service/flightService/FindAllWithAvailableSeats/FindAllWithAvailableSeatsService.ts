import { Flight } from "../../../entities/Flight";
import { IFlightRepository } from "../../../repositories/IFlightRepository";
import { transformFlightsDateToString } from "../validations/TransformClientDateToString";

export class FindAllWithAvailableSeatsService {
  constructor(private flightRepository: IFlightRepository) {}

  async execute(): Promise<Flight[]> {
    const flights = await this.flightRepository.findAllWithAvailableSeats();

    return transformFlightsDateToString(flights)
  }
}
