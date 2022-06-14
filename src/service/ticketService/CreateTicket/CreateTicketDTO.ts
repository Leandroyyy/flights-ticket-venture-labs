import { Client } from '../../../entities/Client';
import { Flight } from './../../../entities/Flight';


export interface ICreateTicketRequestDTO {
  seatNumber: string;
  idFlight: number;
  idClient: number;
}
