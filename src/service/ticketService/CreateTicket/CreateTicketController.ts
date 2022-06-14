import { CreateTicketService } from './CreateTicketService';
import { Response } from "express";
import { Request } from "express";

export class CreateTicketController {
  constructor(private createTicketService: CreateTicketService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { seatNumber, idFlight, idClient } = request.body;
    try {
      await this.createTicketService.execute({
        seatNumber,
        idFlight,
        idClient,
      });

      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
