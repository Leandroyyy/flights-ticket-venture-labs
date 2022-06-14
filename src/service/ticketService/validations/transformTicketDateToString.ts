import { Client } from "../../../entities/Client";
import { Flight } from "../../../entities/Flight";
import { Ticket } from "../../../entities/Ticket";


export function transformTicketDateToString(data:Ticket[]):Ticket[]{
    const formattedTicketPurchaseDate:Ticket[] = data;
    data.map((ticket,i)=>{
        if(typeof ticket.purchaseDate == 'string') return
        formattedTicketPurchaseDate[i].purchaseDate = ticket.purchaseDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

        const formattedClientBirthDate:Client = ticket.client;
        if(typeof ticket.client.birthDate == 'string') return
        formattedClientBirthDate.birthDate = ticket.client.birthDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})

        const formattedFlightDate:Flight = ticket.flight;
        if(typeof ticket.flight.arrivalDay == 'string') return
        formattedFlightDate.arrivalDay = ticket.flight.arrivalDay.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        if(typeof ticket.flight.departureDay == 'string') return
        formattedFlightDate.departureDay = ticket.flight.departureDay.toLocaleDateString('pt-BR',{timeZone:'UTC'})
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

    const formattedFlightDate:Flight = data.flight;
    if(typeof data.flight.arrivalDay == 'string') return
    formattedFlightDate.arrivalDay = data.flight.arrivalDay.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    if(typeof data.flight.departureDay == 'string') return
    formattedFlightDate.departureDay = data.flight.departureDay.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    return formattedTicketPurchaseDate;
}
