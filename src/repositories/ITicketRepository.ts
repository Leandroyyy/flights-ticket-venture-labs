import { Ticket } from "../entities/Ticket";


export interface ITicketRepository{

    save(ticket:Ticket):Promise<void>;
    findSeat(seatNumber:string, idFlight:number):Promise<Ticket[]>;
    findAll():Promise<Ticket[]>;
    findById(id:number):Promise<Ticket>;
    update(id:number,ticket:Ticket):Promise<Ticket>;
    remove(id:number):Promise<void>;
}