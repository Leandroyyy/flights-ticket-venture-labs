import { HandleDate } from './Client';
import { Airport } from './Airport';


export class Flight {
  public readonly id: number;
  public arrivalDay:HandleDate;
  public arrivalTime: string;
  public departureDay:HandleDate;
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

  constructor(props: Omit<Flight,'id'>, id?:number ) {
    Object.assign(this,props)
  }

}
