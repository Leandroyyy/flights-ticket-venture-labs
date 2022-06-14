import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';
import { FindAllFlightTicketsController } from './FindAllFlightTicketsController';
import { FindAllFlightTicketsService } from "./FindAllFlightTicketsService";


const prismaFlightsRepository = new PrismaFlightsRepository();

const findAllFlightTicketsService = new FindAllFlightTicketsService(
    prismaFlightsRepository
)

const findAllFlightTicketsController = new FindAllFlightTicketsController(findAllFlightTicketsService);


export {findAllFlightTicketsService , findAllFlightTicketsController}