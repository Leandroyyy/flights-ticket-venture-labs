import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';
import { FindAllFlightsController } from './FindAllFlightsController';
import { FindAllFlightsService } from "./FindAllFlightsService";


const prismaFlightsRepository = new PrismaFlightsRepository();

const findAllFlightsService = new FindAllFlightsService(
    prismaFlightsRepository
)

const findAllFlightsController = new FindAllFlightsController(findAllFlightsService);


export {findAllFlightsService , findAllFlightsController}