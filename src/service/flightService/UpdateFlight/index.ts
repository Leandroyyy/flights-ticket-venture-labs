import { UpdateFlightService } from './UpdateFlightService';
import { UpdateFlightController } from './UpdateFlightController';
import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';

const prismaFlightsRepository = new PrismaFlightsRepository();

const updateFlightService = new UpdateFlightService(
    prismaFlightsRepository
)

const updateFlightController = new UpdateFlightController(updateFlightService);


export {updateFlightService , updateFlightController}