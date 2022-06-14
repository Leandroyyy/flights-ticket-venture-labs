import { Response, Request } from 'express';
import { UpdateTicketService } from "./UpdateTicketService";


export class UpdateTicketController {
    constructor(private updateTicketService: UpdateTicketService) {}
  
    async handle(request: Request, response: Response): Promise<Response> {
      const { seatNumber, idFlight, idClient } = request.body;
      const id = Number(request.params.id);
      try {
        await this.updateTicketService.execute(id,{
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
  