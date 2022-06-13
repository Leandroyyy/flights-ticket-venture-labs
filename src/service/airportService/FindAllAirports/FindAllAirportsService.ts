import { Airport } from './../../../entities/Airport';
import { IAirportRepository } from './../../../repositories/IAirportRepository';


export class FindAllAirportsService{

    constructor(
        private airportRepository:IAirportRepository
    ){}

    async execute():Promise<Airport[]>{
        return await this.airportRepository.findAll();
    }
}