import { Ticket } from '../../../entities/Ticket';
import { transformTicketDateToString } from '../validations/TransformTicketDateToString';
import { ITicketRepository } from './../../../repositories/ITicketRepository';

export class FindAllTicketsService{

    constructor(
        private ticketRepository:ITicketRepository
    ){}

    async execute():Promise<Ticket[]>{
        const tickets = await this.ticketRepository.findAll();

        return transformTicketDateToString(tickets);
    }
}