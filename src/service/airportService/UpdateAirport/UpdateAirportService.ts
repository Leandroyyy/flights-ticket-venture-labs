import { Airport } from "../../../entities/Airport";
import { IAirportRepository } from "./../../../repositories/IAirportRepository";
import { IUpdateAirportRequestDTO } from "./UpdateAirportDTO";

export class UpdateAirportService {
  constructor(private airportRepository: IAirportRepository) {}

  async execute(id: number, data: IUpdateAirportRequestDTO):Promise<void> {
    const airport = new Airport(data);

    const { name, city, state, country } = airport;

    if (!name || name.trim() == "") throw new Error("Nome obrigatório");
    if (!city || city.trim() == "") throw new Error("Cidade obrigatória");
    if (!state || state.trim() == "") throw new Error("Estado obrigatório");
    if (!country || country == "") throw new Error("País obrigatório");

    await this.airportRepository.update(id, airport);
  }
}
