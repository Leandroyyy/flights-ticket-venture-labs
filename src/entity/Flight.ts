import { Airport } from './Airport';

export class Flight {
  public id: number;
  public arrivalTime: string;
  public departureTime: string;
  public numberSeats: number;
  public ticketPrice: string;
  public airline: string;
  public cabin: string;
  public isInternational: boolean;
  public idAirportOrigin?: number;
  public idAirportDestination?: number;
  public airportOrigin?:Airport;
  public airportDestination?:Airport;

  constructor(
    arrivalTime: string,
    departureTime: string,
    numberSeats: number,
    ticketPrice: string,
    airline: string,
    cabin: string,
    isInternational: boolean,
    idAirportOrigin: number,
    idAirportDestination: number,
  ) {
    this.arrivalTime = arrivalTime;
    this.departureTime = departureTime;
    this.numberSeats = numberSeats;
    this.ticketPrice = ticketPrice;
    this.airline = airline;
    this.cabin = cabin;
    this.isInternational = isInternational
    this.idAirportOrigin = idAirportOrigin;
    this.idAirportDestination = idAirportDestination;  
  }
}
