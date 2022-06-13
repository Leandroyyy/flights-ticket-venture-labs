import { Ticket } from "../../../entities/Ticket";
import { IClientsRepository } from "../../../repositories/IClientRepository";
import { transformTicketDateToString } from "../../ticketService/validations/transformTicketDateToString";

export class FindClientTicketsService{
    constructor(
        private clientRepository:IClientsRepository
    ){}

    async execute(id:number):Promise<Ticket[]>{
        const tickets = await this.clientRepository.findAllTickets(id)

        if(!tickets) throw new Error(`Cliente não possui nenhuma passagem comprada`)

        return transformTicketDateToString(tickets);
    }
}