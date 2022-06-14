import { Flight } from "../../../entities/Flight";
import { IFlightRepository } from "../../../repositories/IFlightRepository";

export class DeleteFlightService {
  constructor(private flightRepository: IFlightRepository) {}

  async execute(id: number): Promise<void> {
    await this.flightRepository
      .remove(id)
      .then()
      .catch(() => {
        throw new Error(`Voo do id:${id} não encontrado`);
      });
  }
}
