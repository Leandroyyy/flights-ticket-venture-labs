import { UpdateFlightService } from "./UpdateFlightService";
import { Response } from "express";
import { Request } from "express";

export class UpdateFlightController {
  constructor(private updateFlightService: UpdateFlightService) {}

  async handle(request: Request, response: Response): Promise<Response> {

    const id = Number(request.params.id);
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
      await this.updateFlightService.execute(id,{
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

      return response.status(200).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
