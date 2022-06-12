import { Response } from "express";
import { Request } from "express";
import FlightService from "../service/FlightService";
import { Flight } from "./../entity/Flight";

class FlightController {
  public async findAll(req: Request, res: Response): Promise<Response> {
    const allFlights = await FlightService.findAll();
    return res.status(200).json(allFlights);
  }

  public async findOneById(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const flight = await FlightService.findOne(id);
      return res.status(200).json(flight);
    } catch (err: any) {
      return res
        .status(404)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async findAllAvailable(req: Request, res: Response): Promise<Response> {
    const allFlights = await FlightService.findAllFlightsWithAvailableSeats();
    return res.status(200).json(allFlights);
  }

  public async findTickets(req:Request, res:Response):Promise<Response>{
    try{
        const id = Number(req.params.id);
        const tickets = await FlightService.findAllTickets(id)
        return res.status(200).json(tickets);
        }catch(err:any){
            return res.status(404).json({message:err.message || "Unexpected error!"})
        }
}

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        arrivalTime,
        departureTime,
        idAirportOrigin,
        idAirportDestination,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
      } = req.body;
      const flight = new Flight(
        arrivalTime,
        departureTime,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
        idAirportOrigin,
        idAirportDestination
      );
      await FlightService.create(flight);
      return res.status(201).json(flight);
    } catch (err: any) {
      return res
        .status(406)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const {
        arrivalTime,
        departureTime,
        idAirportOrigin,
        idAirportDestination,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
      } = req.body;
      const flight = new Flight(
        arrivalTime,
        departureTime,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
        idAirportOrigin,
        idAirportDestination
      );
      await FlightService.update(id, flight);
      return res.status(200).json(flight);
    } catch (err: any) {
      return res
        .status(406)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await FlightService.remove(id);
      return res.status(200).send();
    } catch (err: any) {
      return res
        .status(404)
        .json({ message: err.message || "Unexpected error!" });
    }
  }
}

export default new FlightController();
