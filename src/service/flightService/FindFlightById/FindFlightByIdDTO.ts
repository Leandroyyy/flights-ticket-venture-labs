import { Airport } from "../../../entities/Airport";


export interface IFindFlightsByIdResponseDTO{
    arrivalTime: string;
    departureTime: string;
    numberSeats: number;
    ticketPrice: string;
    airline: string;
    cabin: string;
    isInternational: boolean;
    airportOrigin: Airport;
    airportDestination: Airport;
}