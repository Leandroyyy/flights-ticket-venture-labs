import { Flight } from "../entities/Flight";
import { Ticket } from "../entities/Ticket";



export interface IFlightRepository{
    save(flight:Flight):Promise<void>;
    findAll():Promise<Flight[]>;
    findById(id:number):Promise<Flight>;
    findAllWithAvailableSeats():Promise<Flight[]>;
    findAllFlightTickets(id:number):Promise<Ticket[]>;
    update(id:number,flight:Flight):Promise<Flight>;
    remove(id:number):Promise<void>;
}