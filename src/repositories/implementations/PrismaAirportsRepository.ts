import { prisma } from '../../database/prismaClient';
import { Airport } from '../../entities/Airport';
import { IAirportRepository } from '../IAirportRepository';



export class PrismaAirportsRepository implements IAirportRepository{
    async save(airport: Airport): Promise<void> {
        await prisma.airport.create({data:airport}).then();
    }

    async findAll(): Promise<Airport[]> {
        return await prisma.airport.findMany().then();
    }

    // async findById(id: number): Promise<Airport> {
        
    // }

    // async update(id: number, airport: Airport): Promise<Airport> {
        
    // }

    // async delete(id: number): Promise<void> {
        
    // }
}