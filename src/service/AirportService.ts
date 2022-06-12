import { prisma } from "../database/prismaClient";
import { Airport } from "./../entity/Airport";

class AirportService {
  
  public async create(airport: Airport): Promise<void> {
    const { name, city, state, country } = airport;
    try {
      await prisma.airport
        .create({
          data: {
            name,
            city,
            state,
            country,
          },
        })
        .then();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findAll(): Promise<Airport[]> {
    try {
      const allAirpots = await prisma.airport.findMany();
      return allAirpots;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findOne(id: number): Promise<Airport> {
    const airport = await prisma.airport.findUnique({
      where: {
        id,
      },
    });

    if (!airport) throw new Error(`Id ${id} não encontrado!`);

    return airport;
  }

  public async update(id: number, airport: Airport): Promise<Airport> {
    const { name, city, state, country } = airport;
    try {
      const newAirport = await prisma.airport
        .update({
          where: {
            id,
          },
          data: {
            name,
            city,
            state,
            country,
          },
        })
        .then();

      return newAirport;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await prisma.airport
        .delete({
          where: {
            id,
          },
        })
        .then();
    } catch (e: any) {
      if (!id) throw new Error(`Id ${id} não encontrado`);
      throw new Error(e);
    }
  }
}

export default new AirportService();
