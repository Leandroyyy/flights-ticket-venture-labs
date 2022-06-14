import { Ticket } from '../../../entities/Ticket';
import { ITicketRepository } from './../../../repositories/ITicketRepository';

export class FindTicketByIdService{
    constructor(
        private ticketRepository:ITicketRepository
    ){}

    async execute(id:number):Promise<Ticket>{
        const ticket = await this.ticketRepository.findById(id);

        if(!airport) throw new Error(`Aeroporto do id:${id} não encontrado`)

        return airport;
    }
}