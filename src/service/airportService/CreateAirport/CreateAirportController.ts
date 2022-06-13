import { CreateAirportService } from "./CreateAirportService";
import { Response } from "express";
import { Request } from "express";

export class CreateAirportController {
  constructor(private createAirportService: CreateAirportService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, city, state, country } = request.body;
    try {
      await this.createAirportService.execute({
        name,
        city,
        state,
        country,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
