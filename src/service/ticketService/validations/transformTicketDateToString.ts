import { Client } from "../../../entities/Client";
import { Ticket } from "../../../entities/Ticket";


export function transformTicketDateToString(data:Ticket[]):Ticket[]{
    const formattedTicketPurchaseDate:Ticket[] = data;
    data.map((ticket,i)=>{
        if(typeof ticket.purchaseDate == 'string') return
        formattedTicketPurchaseDate[i].purchaseDate = ticket.purchaseDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

        const formattedClientBirthDate:Client = ticket.client;
        if(typeof ticket.client.birthDate == 'string') return
        formattedClientBirthDate.birthDate = ticket.client.birthDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})
    })


    return formattedTicketPurchaseDate;
}


export function transformClientDateToString(data:Ticket):Ticket{
    const formattedTicketPurchaseDate:Ticket = data

    if(typeof data.purchaseDate == 'string') return
    formattedTicketPurchaseDate.purchaseDate = data.purchaseDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    const formattedClientBirthDate:Client = data.client;
    if(typeof data.client.birthDate == 'string') return
    formattedClientBirthDate.birthDate = data.client.birthDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    return formattedTicketPurchaseDate;
}
