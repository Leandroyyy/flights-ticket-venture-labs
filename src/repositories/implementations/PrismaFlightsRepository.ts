import { prisma } from "../../database/prismaClient";
import { Flight } from "../../entities/Flight";
import { Ticket } from "../../entities/Ticket";
import { IFlightRepository } from "../IFlightRepository";

export class PrismaFlightsRepository implements IFlightRepository {
  async save(flight: Flight): Promise<void> {
    const {
      arrivalDay,
      arrivalTime,
      departureDay,
      departureTime,
      idAirportOrigin,
      idAirportDestination,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
    } = flight;
    await prisma.flight.create({
      data: {
        arrivalDay,
        arrivalTime,
        departureDay,
        departureTime,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
        idAirportOrigin,
        idAirportDestination,
      },
    });
  }

  async findAll(): Promise<Flight[]> {
    return await prisma.flight.findMany({
      select: {
        id: true,
        arrivalDay:true,
        arrivalTime: true,
        departureDay:true,
        departureTime: true,
        numberSeats: true,
        ticketPrice: true,
        airline: true,
        cabin: true,
        isInternational: true,
        airportOrigin: true,
        airportDestination: true,
      },
    });
  }

  async findById(id: number): Promise<Flight> {
    return await prisma.flight.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        arrivalDay:true,
        arrivalTime: true,
        departureDay:true,
        departureTime: true,
        numberSeats: true,
        ticketPrice: true,
        airline: true,
        cabin: true,
        isInternational: true,
        airportOrigin: true,
        airportDestination: true,
      },
    });
  }

  async findAllWithAvailableSeats(): Promise<Flight[]> {
    return await prisma.flight.findMany({
      where: {
        numberSeats: {
          not: 0,
        },
      },
      select: {
        id: true,
        arrivalDay:true,
        arrivalTime: true,
        departureDay:true,
        departureTime: true,
        numberSeats: true,
        ticketPrice: true,
        airline: true,
        cabin: true,
        isInternational: true,
        airportOrigin: true,
        airportDestination: true,
      },
    });
  }

  async findAllFlightTickets(id: number): Promise<Ticket[]> {
    return await prisma.ticket.findMany({
      where: {
        idFlight: id,
      },
      select:{
        id:true,
        seatNumber:true,
        purchaseDate:true,
        client:true
      }
    });
  }

  async update(id: number, flight: Flight): Promise<Flight> {
    const {
      arrivalDay,
      arrivalTime,
      departureDay,
      departureTime,
      idAirportOrigin,
      idAirportDestination,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
    } = flight;
    return await prisma.flight.update({
      where: {
        id,
      },
      data: {
        arrivalDay,
        arrivalTime,
        departureDay,
        departureTime,
        numberSeats,
        ticketPrice,
        airline,
        cabin,
        isInternational,
        idAirportOrigin,
        idAirportDestination,
      },
    });
  }

  async remove(id: number): Promise<void> {

    await prisma.ticket.deleteMany({
      where:{
        idFlight:id
      }
    })

    await prisma.flight.delete({
      where:{
        id
      }
    })
  }
}
