import { Flight } from '../../../entities/Flight';
import { IFlightRepository } from './../../../repositories/IFlightRepository';


export class FindFlightByIdService{
    constructor(
        private flightRepository:IFlightRepository
    ){}

    async execute(id:number):Promise<Flight>{
        const flight = await this.flightRepository.findById(id)

        if(!flight) throw new Error(`Voo do id:${id} não encontrado`)

        return flight;
    }
}