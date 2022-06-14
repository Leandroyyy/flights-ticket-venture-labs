import { UpdateAirportService } from "./UpdateAirportService";
import { Response } from "express";
import { Request } from "express";

export class UpdateAirportController {
  constructor(private updateAirportService: UpdateAirportService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, city, state, country } = request.body;
    const id = Number(request.params.id);
    try {
      const airport = await this.updateAirportService.execute(id, {
        name,
        city,
        state,
        country,
      });

      return response.status(200).json(airport);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
