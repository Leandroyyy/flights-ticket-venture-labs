import { UpdateClientService } from "./UpdateClientService";
import { Response } from "express";
import { Request } from "express";

export class UpdateClientController {
  constructor(private updateClientService: UpdateClientService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, lastName, email, cpf, birthDate, passport } = request.body;
    const id = Number(request.params.id);
    try {
      const client = await this.updateClientService.execute(id, {
        name,
        lastName,
        email,
        cpf,
        birthDate,
        passport,
      });

      return response.status(200).json(client);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || "Erro inesperado!",
      });
    }
  }
}
