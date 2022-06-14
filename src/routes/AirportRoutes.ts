import { Router } from 'express';
import { createAirportController } from '../service/airportService/CreateAirport';
import { deleteAirportController } from '../service/airportService/DeleteAirport';
import { findAllAirportsController } from '../service/airportService/FindAllAirports';
import { findAirportByIdController } from '../service/airportService/FindAirportById';
import { updateAirportController } from '../service/airportService/UpdateAirport';

const airportRoutes = Router()

airportRoutes.get("/airport", (request,response)=>{
    return findAllAirportsController.handle(request,response);
})

airportRoutes.get("/airport/:id", (request,response)=>{
    return findAirportByIdController.handle(request,response);
})

airportRoutes.post("/airport", (request,response)=>{
    return createAirportController.handle(request,response);
})

airportRoutes.put("/airport/:id", (request,response)=>{
    return updateAirportController.handle(request,response);
})

airportRoutes.delete("/airport/:id", (request,response)=>{
    return deleteAirportController.handle(request,response);
})

export {airportRoutes}