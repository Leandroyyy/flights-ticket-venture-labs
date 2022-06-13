import { Response } from "express";
import { Request } from "express";
import AirportService from "../service/AirportService";
import { Airport } from "../entities/Airport";

class AirpotController {
  public async findAll(req: Request, res: Response): Promise<Response> {
    const allAirports = await AirportService.findAll();
    return res.status(200).json(allAirports);
  }

  public async findOneById(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const airport = await AirportService.findOne(id);
      return res.status(200).json(airport);
    } catch (err: any) {
      return res
        .status(404)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, city, state, country } = req.body;
      const airport = new Airport(name, city, state, country);
      await AirportService.create(airport);
      return res.status(201).json(airport);
    } catch (err: any) {
      return res
        .status(406)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      const { name, city, state, country } = req.body;
      const airport = new Airport(name, city, state, country);
      await AirportService.update(id, airport);
      return res.status(200).json(airport);
    } catch (err: any) {
      return res
        .status(406)
        .json({ message: err.message || "Unexpected error!" });
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id);
      await AirportService.remove(id);
      return res.status(200).send();
    } catch (err: any) {
      return res
        .status(404)
        .json({ message: err.message || "Unexpected error!" });
    }
  }
}

export default new AirpotController();
