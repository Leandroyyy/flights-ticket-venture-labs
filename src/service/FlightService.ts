import { prisma } from "../database/prismaClient";
import { Ticket } from "../entities/Ticket";
import { Flight } from "../entities/Flight";

class FlightService {
  public async create(flight: Flight): Promise<void> {
    const {
      arrivalTime,
      departureTime,
      idAirportOrigin,
      idAirportDestination,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
    } = flight;

    try {
      await prisma.flight
        .create({
          data: {
            arrivalTime,
            departureTime,
            idAirportOrigin,
            idAirportDestination,
            numberSeats,
            ticketPrice,
            airline,
            cabin,
            isInternational,
          },
        })
        .then();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findAll(): Promise<Flight[]> {
    try {
      const allFlights = await prisma.flight.findMany({
        select: {
          id:true,
          arrivalTime:true,
          departureTime:true,
          numberSeats:true,
          ticketPrice:true,
          airline:true,
          cabin:true,
          isInternational:true,
          airportOrigin: true,
          airportDestination: true,
        },
      });
      return allFlights;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findOne(id: number): Promise<Flight> {
    const flight = await prisma.flight.findUnique({
      where: {
        id,
      },
      include: {
        airportOrigin: true,
        airportDestination: true,
      },
    });

    if (!flight) throw new Error(`Id ${id} não encontrado!`);

    return flight;
  }

  public async findAllFlightsWithAvailableSeats(): Promise<Flight[]>{
    try{
      const allFlights = await prisma.flight.findMany({
        where:{
          numberSeats:{
            not:0
          }
        },select:{
          id:true,
          arrivalTime:true,
          departureTime:true,
          numberSeats:true,
          ticketPrice:true,
          airline:true,
          cabin:true,
          isInternational:true,
          airportOrigin: true,
          airportDestination: true,
        }
      })
      return allFlights;
    }catch(e:any){
        throw new Error("Infelizmente não há voos disponiveis")
    }
  }

  public async findAllTickets(id:number):Promise<Ticket[]>{
    try{
      const allTickets = await prisma.ticket.findMany({
        where:{
          idFlight:id
        }
      })

      return allTickets;
    }catch(e:any){
      throw new Error("Este voo não possue nenhuma passagem comprada ainda!")
    }
  }

  public async update(id: number, flight: Flight): Promise<Flight> {
    const {
      arrivalTime,
      departureTime,
      idAirportOrigin,
      idAirportDestination,
      numberSeats,
      ticketPrice,
      airline,
      cabin,
      isInternational,
    } = flight;

    try {
      const updatedFlight = await prisma.flight
        .update({
          where: {
            id,
          },
          data: {
            arrivalTime,
            departureTime,
            numberSeats,
            ticketPrice,
            airline,
            cabin,
            isInternational,
            idAirportOrigin,
            idAirportDestination,
          },
        })
        .then();
      return updatedFlight;
    } catch (e: any) {
      if (!id) throw new Error(`Id ${id} não encontrado`);
      throw new Error(e);
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await prisma.flight
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

export default new FlightService();
