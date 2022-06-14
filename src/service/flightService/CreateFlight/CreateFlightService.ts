import ptBR from "date-fns/locale/pt-BR";
import parse from "date-fns/parse";
import { Flight } from "./../../../entities/Flight";
import { IFlightRepository } from "./../../../repositories/IFlightRepository";
import { ICreateFlightRequestDTO } from "./CreateFlightDTO";

export class CreateFlightService {
  constructor(private flightRepository: IFlightRepository) {}

  async execute(data: ICreateFlightRequestDTO):Promise<void> {
    const flight = new Flight(data);

    const {
      arrivalDay,
      arrivalTime,
      departureDay,
      departureTime,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
      idAirportOrigin,
      idAirportDestination,
    } = flight;


    const formattedArrivalDay = parse(String(arrivalDay),"dd/MM/yyyy", new Date(),{locale:ptBR})
    const formattedDepartureDay = parse(String(departureDay),"dd/MM/yyyy", new Date(),{locale:ptBR})

    if (!formattedArrivalDay) throw new Error("Informe o dia de chegada");
    if (!arrivalTime || arrivalTime.trim() == "") throw new Error("Informe o horário de chegada");
    if (!formattedDepartureDay) throw new Error("Informe o dia de saída");
    if (!departureTime || departureTime.trim() == "") throw new Error("Informe o horário de saída");
    if (!numberSeats || numberSeats <= 0 ) throw new Error("Informe a quantidade de assentos");
    if (!ticketPrice || ticketPrice.trim() == "") throw new Error("Informe o valor da passagem");
    if (!airline || airline.trim() == "") throw new Error("Informe a companhia aérea");
    if (!cabin || cabin.trim() == "") throw new Error("Informe o tipo da cabine");
    if (isInternational == null) throw new Error("Informe se será um voo internacional");
    if (idAirportOrigin <= 0) throw new Error("Informe o id do aeroporto de Origem");
    if (idAirportOrigin == idAirportDestination) throw new Error("O aeroporto de origem não pode ser o mesmo de destino");
    if (idAirportDestination <= 0) throw new Error("Informe o id do aeroporto de Destino");

    flight.arrivalDay = formattedArrivalDay;
    
    flight.departureDay = formattedDepartureDay;

    console.log(flight.departureDay.toLocaleDateString())

    await this.flightRepository.save(flight);
  }
}
