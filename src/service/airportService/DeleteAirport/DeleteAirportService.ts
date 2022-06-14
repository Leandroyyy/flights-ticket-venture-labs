import { IAirportRepository } from './../../../repositories/IAirportRepository';


export class DeleteAirportService {
  constructor(private airportRepository: IAirportRepository) {}

  async execute(id: number): Promise<void> {
    await this.airportRepository.remove(id).then().catch(() => {
      throw new Error(`Aeroporto do id:${id} não encontrado`);
    });
  }
}
