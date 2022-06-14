import { Router } from 'express';
import { createTicketController } from '../service/ticketService/CreateTicket';
import { findAllTicketsController } from '../service/ticketService/FindAllTickets';
import { findTicketByIdController } from '../service/ticketService/FindTicketById';



const ticketsRoutes = Router()

ticketsRoutes.get("/tickets", (request,response)=>{
    return findAllTicketsController.handle(request,response);
})

ticketsRoutes.get("/ticket/:id", (request,response)=>{
    return findTicketByIdController.handle(request,response);
})

ticketsRoutes.post("/ticket", (request,response)=>{
    return createTicketController.handle(request,response);
})


export {ticketsRoutes}