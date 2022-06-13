import { Airport } from "../entities/Airport";


export interface IAirportRepository{
    save(airport:Airport):Promise<void>;
    findAll():Promise<Airport[]>;
    findById(id:number):Promise<Airport>;
    update(id:number,airport:Airport):Promise<Airport>;
    remove(id:number):Promise<void>;
}