import ClientController from "./controllers/ClientController";
import { Router } from "express";
import AirportController from "./controllers/AirportController";
import FlightController from "./controllers/FlightController";
import TicketController from "./controllers/TicketController";

const routes = Router();

//Clients Routes
routes.get("/client", ClientController.findAll);
routes.get("/client/:id", ClientController.findOneById);
routes.get("/client/:id/ticket", ClientController.findTickets) 
routes.post("/client", ClientController.create);
routes.put("/client/:id", ClientController.update);
routes.delete("/client/:id", ClientController.remove);

//Airports Routes
routes.get("/airport", AirportController.findAll);
routes.get("/airport/:id", AirportController.findOneById);
routes.post("/airport", AirportController.create);
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
