import { Router } from "express";
import FlightController from "./controllers/FlightController";
import TicketController from "./controllers/TicketController";
import { airportRoutes } from "./routes/AirportRoutes";
import { clientRoutes } from "./routes/ClientRoutes";
import { flightsRoutes } from "./routes/FlightRoutes";

const routes = Router();

//All Clients Routes
routes.use(clientRoutes)

//Airports Routes
routes.use(airportRoutes)

//Flights Routes
routes.use(flightsRoutes);

//Tickets Routes
routes.get("/ticket", TicketController.findAll)
routes.get("/ticket/:id", TicketController.findOneById)
routes.post("/ticket", TicketController.create)
routes.put("/ticket/:id", TicketController.update)
routes.delete("/ticket/:id", TicketController.remove)

export { routes };
