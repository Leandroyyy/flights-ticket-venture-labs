import { Ticket } from "../../../entities/Ticket";


export function transformTicketDateToString(data:Ticket[]):Ticket[]{
    const formattedTicket:Ticket[] = data;
    data.map((ticket,i)=>{
        if(typeof ticket.purchaseDate == 'string') return
        formattedTicket[i].purchaseDate = ticket.purchaseDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    })

    return formattedTicket
}