import { prisma } from "../../database/prismaClient";
import { Client } from "../../entities/Client";
import { Ticket } from "../../entities/Ticket";
import { IClientsRepository } from "./../IClientRepository";

export class PrismaClientsRepository implements IClientsRepository {
  async save(client: Client): Promise<void> {
    await prisma.client.create({ data: client });
  }

  async findAll(): Promise<Client[]> {
    return await prisma.client.findMany();
  }

  async findById(id: number): Promise<Client> {
    return prisma.client.findUnique({ where: { id } });
  }

  async findByCpf(cpf: string): Promise<Client> {
    return prisma.client.findUnique({ where: { cpf } });
  }

  async findAllTickets(id: number): Promise<Ticket[]> {
    return await prisma.ticket.findMany({
      where: {
        idClient: id,
      },
      select: {
        id: true,
        seatNumber: true,
        purchaseDate: true,
        flight: {
          include: {
            airportOrigin: true,
            airportDestination: true,
          },
        },
      },
    });
  }

  async update(id: number, client: Client): Promise<Client> {
    return await prisma.client.update({ where: { id }, data: client });
  }

  async remove(id: number): Promise<void> {
    await prisma.ticket.deleteMany({
        where: {
          idClient: id,
        },
      });
    await prisma.client.delete({ where: { id } });
  }
}
