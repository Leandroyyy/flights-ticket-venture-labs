export interface ICreateFlightRequestDTO {
  arrivalTime: string;
  departureTime: string;
  numberSeats: number;
  ticketPrice: string;
  airline: string;
  cabin: string;
  isInternational: boolean;
  idAirportOrigin: number;
  idAirportDestination: number;
}
