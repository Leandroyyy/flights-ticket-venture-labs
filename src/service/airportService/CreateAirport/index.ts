import { CreateAirportService } from './CreateAirportService';
import { CreateAirportController } from './CreateAirportController';
import { PrismaAirportsRepository } from '../../../repositories/implementations/PrismaAirportsRepository';

const prismaAirportsRepository = new PrismaAirportsRepository();

const createAirportService = new CreateAirportService(
    prismaAirportsRepository
)

const createAirportController = new CreateAirportController(createAirportService);


export {createAirportService , createAirportController}