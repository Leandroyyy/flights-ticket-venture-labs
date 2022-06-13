import { Response } from "express";
import { Request } from "express";
import { Ticket } from "../entities/Ticket";
import TicketService from "../service/TicketService";

class TicketController {
  public async findAll(req: Request, res: Response): Promise<Response> {
    const allTickets = await TicketService.findAll();
    return res.status(200).json(allTickets);
  }

  public async findOneById(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const ticket = await TicketService.findOne(id);
      return res.status(200).json(ticket);
    } catch (err: any) {
      return res
        .status(404)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { seatNumber, purchaseDate, idFlight, idClient } = req.body;
      const ticket = new Ticket(seatNumber, purchaseDate, idFlight, idClient);
      await TicketService.create(ticket);
      return res.status(201).json(ticket);
    } catch (err: any) {
      return res
        .status(406)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const { seatNumber, purchaseDate, idFlight, idClient } = req.body;
      const ticket = new Ticket(seatNumber, purchaseDate, idFlight, idClient);
      await TicketService.update(id, ticket);
      return res.status(200).json(ticket);
    } catch (err: any) {
      return res
        .status(406)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await TicketService.remove(id);
      return res.status(200).send();
    } catch (err: any) {
      return res
        .status(404)
        .json({ message: err.message || "Unexpected error!" });
    }
  }
}

export default new TicketController();
