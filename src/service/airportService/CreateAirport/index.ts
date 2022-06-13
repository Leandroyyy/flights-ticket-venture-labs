import { CreateAirportService } from './CreateAirportService';
import { CreateAirportController } from './CreateAirportController';
import { PrismaAirportRepository } from '../../../repositories/implementations/PrismaAirportRepository';

const prismaAirportRepository = new PrismaAirportRepository();

const createAirportService = new CreateAirportService(
    prismaAirportRepository
)

const createAirportController = new CreateAirportController(createAirportService);


export {createAirportService , createAirportController}