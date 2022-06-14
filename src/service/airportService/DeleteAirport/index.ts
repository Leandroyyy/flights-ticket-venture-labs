import { PrismaAirportsRepository } from './../../../repositories/implementations/PrismaAirportsRepository';
import { DeleteAirportController } from './DeleteAirportController';
import { DeleteAirportService } from './DeleteAirportService';


const prismaAirportsRepository = new PrismaAirportsRepository();

const deleteAirportService = new DeleteAirportService(
    prismaAirportsRepository
)

const deleteAirportController = new DeleteAirportController(deleteAirportService);


export {deleteAirportService , deleteAirportController}