import { Airport } from '../../../entities/Airport';
import { IAirportRepository } from '../../../repositories/IAirportRepository';

export class FindAirportByIdService{
    constructor(
        private airportRepository:IAirportRepository
    ){}

    async execute(id:number):Promise<Airport>{
        const airport = await this.airportRepository.findById(id)

        if(!airport) throw new Error(`Aeroporto do id:${id} não encontrado`)

        return airport;
    }
}