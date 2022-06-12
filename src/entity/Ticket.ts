import { Client, HandleDate } from './Client';


export class Ticket{

    public id:number;
    public seatNumber:string;
    public purchaseDate:HandleDate;
    public idFlight:number;
    public idClient:number;
    public client?:Client;

    constructor(seatNumber:string,purchaseDate:HandleDate,idFlight:number,idClient:number){
        this.seatNumber = seatNumber;
        this.purchaseDate = purchaseDate;
        this.idFlight = idFlight;
        this.idClient = idClient;
    }

}