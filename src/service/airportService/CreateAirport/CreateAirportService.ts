import { IAirportRepository } from "./../../../repositories/IAirportRepository";
import { Airport } from "../../../entities/Airport";
import { ICreateAirportRequestDTO } from "./CreateAirportDTO";

export class CreateAirportService {
  constructor(private airportRepository: IAirportRepository) {}

  async execute(data: ICreateAirportRequestDTO) {
    const airport = new Airport(data);

    const { name, city, state, country } = airport;

    if (!name || name.trim() == "") throw new Error("Nome obrigatório");
    if (!city || city.trim() == "") throw new Error("Cidade obrigatória");
    if (!state || state.trim() == "") throw new Error("Estado obrigatório");
    if (!country || country.trim() == "") throw new Error("País obrigatório");

    await this.airportRepository.save(airport);
  }
}
