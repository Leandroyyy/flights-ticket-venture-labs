export interface IUpdateFlightRequestDTO {
  arrivalDay:string,
  arrivalTime: string;
  departureDay:string;
  departureTime: string;
  numberSeats: number;
  ticketPrice: string;
  airline: string;
  cabin: string;
  isInternational: boolean;
  idAirportOrigin: number;
  idAirportDestination: number;
}
