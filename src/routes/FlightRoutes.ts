import { Router } from 'express';
import { createFlightController } from '../service/flightService/CreateFlight';
import { deleteFlightController } from '../service/flightService/DeleteFlight';
import { findAllFlightsController } from '../service/flightService/FindAllFlights';
import { findAllFlightTicketsController } from '../service/flightService/FindAllFlightTickets';
import { findAllWithAvailableSeatsController } from '../service/flightService/FindAllWithAvailableSeats';
import { findFlightByIdController } from '../service/flightService/FindFlightById';
import { updateFlightController } from '../service/flightService/UpdateFlight';


const flightsRoutes = Router();

flightsRoutes.get("/flights", (request,response)=>{
    return findAllFlightsController.handle(request,response);
})

flightsRoutes.get("/flight/:id", (request,response)=>{
    return findFlightByIdController.handle(request,response);
})

flightsRoutes.get("/flights/available", (request,response)=>{
    return findAllWithAvailableSeatsController.handle(request,response);
})

flightsRoutes.get("/flight/:id/ticket", (request,response)=>{
    return findAllFlightTicketsController.handle(request,response);
})

flightsRoutes.post("/flight", (request,response)=>{
    return createFlightController.handle(request,response);
})

flightsRoutes.put("/flight/:id", (request,response)=>{
    return updateFlightController.handle(request,response);
})

flightsRoutes.delete("/flight/:id", (request,response)=>{
    return deleteFlightController.handle(request,response);
})

export {flightsRoutes}