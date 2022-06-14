import { Router } from 'express';
import { createTicketController } from '../service/ticketService/CreateTicket';
import { deleteTicketController } from '../service/ticketService/DeleteTicket';
import { findAllTicketsController } from '../service/ticketService/FindAllTickets';
import { findTicketByIdController } from '../service/ticketService/FindTicketById';
import { updateTicketController } from '../service/ticketService/UpdateTicket';



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

ticketsRoutes.put("/ticket/:id", (request,response)=>{
    return updateTicketController.handle(request,response);
})

ticketsRoutes.delete("/ticket/:id", (request,response)=>{
    return deleteTicketController.handle(request,response);
})


export {ticketsRoutes}