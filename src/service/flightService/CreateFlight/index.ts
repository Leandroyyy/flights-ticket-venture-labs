import { CreateFlightService } from './CreateFlightService';
import { CreateFlightController } from './CreateFlightController';
import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';

const prismaFlightsRepository = new PrismaFlightsRepository();

const createFlightService = new CreateFlightService(
    prismaFlightsRepository
)

const createFlightController = new CreateFlightController(createFlightService);


export {createFlightService , createFlightController}