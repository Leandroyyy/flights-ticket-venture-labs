import { Router } from "express";
import AirportController from "./controllers/AirportController";
import FlightController from "./controllers/FlightController";
import TicketController from "./controllers/TicketController";
import { airportRoutes } from "./routes/AirportRoutes";
import { clientRoutes } from "./routes/ClientRoutes";

const routes = Router();

//All Clients Routes
routes.use(clientRoutes)

//Airports Routes
routes.use(airportRoutes)

routes.get("/airport/:id", AirportController.findOneById);
routes.put("/airport/:id", AirportController.update);
routes.delete("/airport/:id", AirportController.remove);

//Flights Routes
routes.get("/flights", FlightController.findAll)
routes.get("/flights/available", FlightController.findAllAvailable)
routes.get("/flight/:id", FlightController.findOneById)
routes.get("/flight/:id/ticket", FlightController.findTickets)
routes.post("/flight", FlightController.create)
routes.put("/flight/:id", FlightController.update)
routes.delete("/flight/:id", FlightController.remove)

//Tickets Routes
routes.get("/ticket", TicketController.findAll)
routes.get("/ticket/:id", TicketController.findOneById)
routes.post("/ticket", TicketController.create)
routes.put("/ticket/:id", TicketController.update)
routes.delete("/ticket/:id", TicketController.remove)

export { routes };
