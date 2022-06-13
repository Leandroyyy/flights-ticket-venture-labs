import { prisma } from '../../database/prismaClient';
import { Airport } from '../../entities/Airport';
import { IAirportRepository } from '../IAirportRepository';



export class PrismaAirportsRepository implements IAirportRepository{
    async save(airport: Airport): Promise<void> {
        await prisma.airport.create({data:airport});
    }

    async findAll(): Promise<Airport[]> {
        return await prisma.airport.findMany();
    }

    async findById(id: number): Promise<Airport> {
        return await prisma.airport.findUnique({where:{id}});
    }

    async update(id: number, airport: Airport): Promise<Airport> {
        return await prisma.airport.update({where:{id},data:airport});
    }

    async remove(id: number): Promise<void> {
        await prisma.airport.delete({where:{id}});
    }
}