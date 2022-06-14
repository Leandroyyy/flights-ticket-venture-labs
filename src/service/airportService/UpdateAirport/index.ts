import { UpdateAirportService } from './UpdateAirportService';
import { UpdateAirportController } from './UpdateAirportController';
import { PrismaAirportsRepository } from '../../../repositories/implementations/PrismaAirportsRepository';

const prismaAirportsRepository = new PrismaAirportsRepository();

const updateAirportService = new UpdateAirportService(
    prismaAirportsRepository
)

const updateAirportController = new UpdateAirportController(updateAirportService);


export {updateAirportService , updateAirportController}