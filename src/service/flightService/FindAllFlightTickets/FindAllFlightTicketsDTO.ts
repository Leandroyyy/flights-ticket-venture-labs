import { Airport } from "../../../entities/Airport";
import { Client } from "../../../entities/Client";
import { Flight } from "../../../entities/Flight";


export interface IFindAllFlightsWithAvailableSeatsResponseDTO{
    readonly id:number;
    seatNumber:string;
    purchaseDate:string;
    client?:Client;
    flight?:Flight;
}