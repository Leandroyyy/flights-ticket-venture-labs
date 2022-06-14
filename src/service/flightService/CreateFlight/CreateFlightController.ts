import { CreateFlightService } from "./CreateFlightService";
import { Response } from "express";
import { Request } from "express";

export class CreateFlightController {
  constructor(private createFlightService: CreateFlightService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      arrivalTime,
      departureTime,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
      idAirportOrigin,
      idAirportDestination,
    } = request.body;
    try {
      await this.createFlightService.execute({
        arrivalTime,
        departureTime,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
        idAirportOrigin,
        idAirportDestination,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
