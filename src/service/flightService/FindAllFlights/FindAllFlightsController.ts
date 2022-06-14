import { Response } from "express";
import { Request } from "express";
import { FindAllFlightsService } from "./FindAllFlightsService";

export class FindAllFlightsController {
  constructor(private findAllFlightsService: FindAllFlightsService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const flights = await this.findAllFlightsService.execute();

      return response.status(200).json(flights);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
