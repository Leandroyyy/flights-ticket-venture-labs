import { PrismaAirportsRepository } from '../../../repositories/implementations/PrismaAirportsRepository';
import { FindAllAirportsController } from './FindAllAirportsController';
import { FindAllAirportsService } from "./FindAllAirportsService";


const prismaAirportsRepository = new PrismaAirportsRepository();

const findAllAirportsService = new FindAllAirportsService(
    prismaAirportsRepository
)

const findAllAirportsController = new FindAllAirportsController(findAllAirportsService);


export {findAllAirportsService , findAllAirportsController}