import { Response } from "express";
import { Request } from "express";
import { FindAllWithAvailableSeatsService } from "./FindAllWithAvailableSeatsService";

export class FindAllWithAvailableSeatsController {
  constructor(private findAllWithAvailableSeatsService: FindAllWithAvailableSeatsService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const flights = await this.findAllWithAvailableSeatsService.execute();

      return response.status(200).json(flights);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
