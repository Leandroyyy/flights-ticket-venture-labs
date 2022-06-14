import { Flight } from './../entities/Flight';
import { Client, HandleDate } from './Client';


export class Ticket{

    public readonly id:number;
    public seatNumber:string;
    public purchaseDate?:HandleDate;
    public idClient?:number;
    public idFlight?:number;
    public client?:Client;
    public flight?:Flight;

    constructor(props: Omit<Ticket,'id'>, id?:number ) {
        Object.assign(this,props)
    }
}