import { Router } from 'express';
import { createAirportController } from '../service/airportService/CreateAirport';
import { findAllAirportsController } from '../service/airportService/FindAllAirports';

const airportRoutes = Router()

airportRoutes.post("/airport", (request,response)=>{
    return createAirportController.handle(request,response);
})

airportRoutes.get("/airpots", (request,response)=>{
    return findAllAirportsController.handle(request,response);
})


export {airportRoutes}