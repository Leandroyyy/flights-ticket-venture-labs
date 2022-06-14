import { FindFlightByIdController } from './FindFlightByIdController';
import { FindFlightByIdService } from './FindFlightByIdService';
import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';


const prismaFlightsRepository = new PrismaFlightsRepository();

const findFlightByIdService = new FindFlightByIdService(
    prismaFlightsRepository
)

const findFlightByIdController = new FindFlightByIdController(findFlightByIdService);


export {findFlightByIdService , findFlightByIdController}