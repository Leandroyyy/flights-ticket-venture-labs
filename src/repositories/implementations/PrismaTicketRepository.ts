import { prisma } from "../../database/prismaClient";
import { Ticket } from "../../entities/Ticket";
import { ITicketRepository } from "./../ITicketRepository";

export class PrismaTicketRepository implements ITicketRepository {
  async save(ticket: Ticket): Promise<void> {
    const { seatNumber, idClient, idFlight } = ticket;
    await prisma.ticket.create({
      data: {
        seatNumber,
        idClient,
        idFlight,
      },
    });
  }

  async findSeat(seatNumber: string, idFlight: number): Promise<Ticket[]> {
    return prisma.ticket.findMany({
        where:{
            idFlight,
            seatNumber,
        }
    })
  }

  async findAll(): Promise<Ticket[]> {
    return await prisma.ticket.findMany();
  }

  async findById(id:number): Promise<Ticket> {
    return await prisma.ticket.findUnique({where:{id}})
  }

  // async update(id: number, ticket: Ticket): Promise<Ticket> {

  // }

  // async remove(id: number): Promise<void> {

  // }
}
