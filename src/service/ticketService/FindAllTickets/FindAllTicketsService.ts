import { Ticket } from '../../../entities/Ticket';
import { transformTicketDateToString } from '../validations/transformTicketDateToString';
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