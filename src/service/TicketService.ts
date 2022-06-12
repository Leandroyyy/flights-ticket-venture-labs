import { Client } from "./../entity/Client";
import { prisma } from "../database/prismaClient";
import { Ticket } from "./../entity/Ticket";
import ptBR from "date-fns/locale/pt-BR";
import parse from "date-fns/parse";

class TicketService {
  public async create(ticket: Ticket): Promise<void> {
    const { seatNumber, purchaseDate, idFlight, idClient } = ticket;
    const formattedPurchaseDate = parse(
      String(purchaseDate),
      "dd/MM/yyyy",
      new Date(),
      { locale: ptBR }
    );
    try {
      const client = await prisma.client.findUnique({
        where: {
          id: idClient,
        },
      });

      const flight = await prisma.flight.findUnique({
        where: {
          id: idFlight,
        },
      });

      if (
        (flight.isInternational && client.passport == "") ||
        client.passport == null
      ) {
        throw new Error(
          "Não é possivel concluir compra, cliente não possui passaporte"
        );
      }

      if (flight.numberSeats <= 0)
        throw new Error("Infelizmente os assentos estão esgotados");

      const othersSeats = await prisma.ticket.findMany({
        where: {
          seatNumber,
        },
      });
      if (othersSeats) throw new Error("Este assento já está ocupado!");

      await prisma.flight.update({
        where: {
          id: idFlight,
        },
        data: {
          numberSeats: flight.numberSeats - 1,
        },
      });

      await prisma.ticket
        .create({
          data: {
            seatNumber,
            purchaseDate: new Date(formattedPurchaseDate),
            idFlight,
            idClient,
          },
        })
        .then();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findAll(): Promise<Ticket[]> {
    try {
      const allTickets = await prisma.ticket.findMany({
        select: {
          id:true,
          seatNumber:true,
          purchaseDate:true,
          client: true,
          flight: true,
        },
      });
      const formattedAllTickets: Ticket[] = allTickets;
      allTickets.map((ticket, i) => {
        formattedAllTickets[i].purchaseDate = ticket.purchaseDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
        formattedAllTickets[i].client.birthDate = ticket.client.birthDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
      });
      return formattedAllTickets;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findOne(id: number): Promise<Ticket> {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id,
      },
      select: {
        id:true,
        seatNumber:true,
        purchaseDate:true,
        client: true,
        flight: {
          include: {
            airportOrigin: true,
            airportDestination: true,
          },
        },
      },
    });
    if (!ticket) throw new Error(`Id ${id} não encontrado!`);

    const formattedTicket: Ticket = ticket;
    formattedTicket.purchaseDate = ticket.purchaseDate.toLocaleDateString(
      "pt-BR",
      { timeZone: "UTC" }
    );
    formattedTicket.client = await this.formatClientBirthDate(ticket.client.id);
    return formattedTicket;
  }

  public async update(id: number, ticket: Ticket): Promise<Ticket> {
    const { seatNumber, purchaseDate, idFlight, idClient } = ticket;
    const formattedPurchaseDate = parse(
      String(purchaseDate),
      "dd/MM/yyyy",
      new Date(),
      { locale: ptBR }
    );
    try {
      const client = await prisma.client.findUnique({
        where: {
          id: idClient,
        },
      });

      const flight = await prisma.flight.findUnique({
        where: {
          id: idFlight,
        },
      });

      if (
        (flight.isInternational && client.passport == "") ||
        client.passport == null
      ) {
        throw new Error(
          "Não é possivel concluir compra, cliente não possui passaporte"
        );
      }

      if (flight.numberSeats <= 0)
        throw new Error("Infelizmente os assentos estão esgotados");

      const othersSeats = await prisma.ticket.findMany({
        where: {
          seatNumber,
        },
      });
      if (othersSeats) throw new Error("Este assento já está ocupado!");

      await prisma.flight.update({
        where: {
          id: idFlight,
        },
        data: {
          numberSeats: flight.numberSeats - 1,
        },
      });
      const newTicket = await prisma.ticket
        .update({
          where: {
            id,
          },
          data: {
            seatNumber,
            purchaseDate: new Date(formattedPurchaseDate),
            idFlight,
            idClient,
          },
        })
        .then();
      return newTicket;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await prisma.ticket
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

  private async formatClientBirthDate(id: number): Promise<Client> {
    const client = await prisma.client.findUnique({
      where: {
        id,
      },
    });

    const formattedClient: Client = client;
    formattedClient.birthDate = client.birthDate.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
    return formattedClient;
  }
}

export default new TicketService();
