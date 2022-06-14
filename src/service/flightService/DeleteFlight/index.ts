import { DeleteFlightController } from './DeleteFlightController';
import { DeleteFlightService } from './DeleteFlightService';
import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';


const prismaFlightsRepository = new PrismaFlightsRepository();

const deleteFlightService = new DeleteFlightService(
    prismaFlightsRepository
)

const deleteFlightController = new DeleteFlightController(deleteFlightService);


export {deleteFlightService , deleteFlightController}