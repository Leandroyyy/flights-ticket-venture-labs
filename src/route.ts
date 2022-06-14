import { Router } from "express";
import { airportRoutes } from "./routes/AirportRoutes";
import { clientRoutes } from "./routes/ClientRoutes";
import { flightsRoutes } from "./routes/FlightRoutes";
import { ticketsRoutes } from "./routes/TicketRoutes";

const routes = Router();

//All Clients Routes
routes.use(clientRoutes);

//Airports Routes
routes.use(airportRoutes);

//Flights Routes
routes.use(flightsRoutes);

//Tickets Routes
routes.use(ticketsRoutes);

export { routes };
