import { Client } from "../../../entities/Client";
import { Flight } from "../../../entities/Flight";


export interface IFindClientTicketsResponseDTO{
    readonly id:number;
    seatNumber:string;
    purchaseDate:string;
    idFlight?:number;
    idClient?:number;
    client?:Client;
    flight?:Flight
}