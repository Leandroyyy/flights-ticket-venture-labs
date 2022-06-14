import { Ticket } from './../../../entities/Ticket';
import { Flight } from '../../../entities/Flight';

export function transformFlightsDateToString(data:Flight[]):Flight[]{
    const formattedFlightsDate:Flight[] = data;
    data.map((flight,i)=>{
        if(typeof flight.departureDay == 'string') return
        formattedFlightsDate[i].departureDay = flight.departureDay.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

        if(typeof flight.arrivalDay == 'string') return
        formattedFlightsDate[i].arrivalDay = flight.arrivalDay.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    })

    return formattedFlightsDate
}

export function transformFlightDateToString(data:Flight):Flight{
    const formattedFlightDate:Flight = data

    if(typeof data.departureDay == 'string') return
    formattedFlightDate.departureDay = data.departureDay.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    if(typeof data.arrivalDay == 'string') return
    formattedFlightDate.arrivalDay = data.arrivalDay.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    return formattedFlightDate;
}

export function transformFlightsTicketDateToString(data:Ticket[]):Ticket[]{
    const formattedTicketDate:Ticket[] = data

    data.map((ticket,i)=>{
        if(typeof ticket.purchaseDate == 'string') return
        formattedTicketDate[i].purchaseDate = ticket.purchaseDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})

        if(typeof ticket.client.birthDate== 'string') return
        formattedTicketDate[i].client.birthDate =  ticket.client.birthDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})

    })
    
    return formattedTicketDate;
}
