import { Client } from '../../../entities/Client';
import { Ticket } from '../../../entities/Ticket';


export function transformClientsListDateToString(data:Client[]):Client[]{
    const formattedClientsBirthDate:Client[] = data;
    data.map((client,i)=>{
        if(typeof client.birthDate == 'string') return
        formattedClientsBirthDate[i].birthDate = client.birthDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    })

    return formattedClientsBirthDate
}

export function transformClientDateToString(data:Client):Client{
    const formattedClientBirthDate:Client = data

    if(typeof data.birthDate == 'string') return
    formattedClientBirthDate.birthDate = data.birthDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    return formattedClientBirthDate;
}

export function transformClientTicketDateToString(data:Ticket[]):Ticket[]{
    const formattedClientsTicket:Ticket[] = data;
    data.map((ticket,i)=>{
        if(typeof ticket.purchaseDate == 'string') return
        formattedClientsTicket[i].purchaseDate = ticket.purchaseDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    })

    return formattedClientsTicket
}