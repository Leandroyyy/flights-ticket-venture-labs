import { Ticket } from '../../../entities/Ticket';
import { ITicketRepository } from '../../../repositories/ITicketRepository';
import { transformClientDateToString } from '../validations/TransformTicketDateToString';

export class FindTicketByIdService{
    constructor(
        private ticketRepository:ITicketRepository
    ){}

    async execute(id:number):Promise<Ticket>{
        const ticket = await this.ticketRepository.findById(id);

        if(!ticket) throw new Error(`Passagem do id:${id} não encontrado`)

        return transformClientDateToString(ticket);
    }
}