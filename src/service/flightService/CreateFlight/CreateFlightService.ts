import { Flight } from "./../../../entities/Flight";
import { IFlightRepository } from "./../../../repositories/IFlightRepository";
import { ICreateFlightRequestDTO } from "./CreateFlightDTO";

export class CreateFlightService {
  constructor(private flightRepository: IFlightRepository) {}

  async execute(data: ICreateFlightRequestDTO) {
    const flight = new Flight(data);

    const {
      arrivalTime,
      departureTime,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
      idAirportOrigin,
      idAirportDestination,
    } = flight;

    if (!arrivalTime || arrivalTime.trim() == "") throw new Error("Tempo de chegada obrigatório");
    if (!departureTime || departureTime.trim() == "") throw new Error("Tempo de saída obrigatória");
    if (!numberSeats || numberSeats <= 0 ) throw new Error("Informe a quantidade de assentos");
    if (!ticketPrice || ticketPrice.trim() == "") throw new Error("Informe o valor da passagem");
    if (!airline || airline.trim() == "") throw new Error("Informe a companhia aérea");
    if (!cabin || cabin.trim() == "") throw new Error("Informe o tipo da cabine");
    if (isInternational == null) throw new Error("Informe se será um voo internacional");
    if (idAirportOrigin <= 0) throw new Error("Informe o id do aeroporto de Origem");
    if (idAirportOrigin == idAirportDestination) throw new Error("O aeroporto de origem não pode ser o mesmo de destino");
    if (idAirportDestination <= 0) throw new Error("Informe o id do aeroporto de Destino");


    await this.flightRepository.save(flight);
  }
}
