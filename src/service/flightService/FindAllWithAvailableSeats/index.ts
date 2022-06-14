import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';
import { FindAllWithAvailableSeatsController } from './FindAllWithAvailableSeatsController';
import { FindAllWithAvailableSeatsService } from "./FindAllWithAvailableSeatsService";


const prismaFlightsRepository = new PrismaFlightsRepository();

const findAllWithAvailableSeatsService = new FindAllWithAvailableSeatsService(
    prismaFlightsRepository
)

const findAllWithAvailableSeatsController = new FindAllWithAvailableSeatsController(findAllWithAvailableSeatsService);


export {findAllWithAvailableSeatsService , findAllWithAvailableSeatsController}