import { PrismaClientsRepository } from '../../../repositories/implementations/PrismaClientsRepository';
import { FindClientTicketsController } from './FindClientTicketsController';
import { FindClientTicketsService } from './FindClientTicketsService';


const prismaClientsRepository = new PrismaClientsRepository();

const findClientTicketsService = new FindClientTicketsService(
    prismaClientsRepository
)

const findClientTicketsController = new FindClientTicketsController(findClientTicketsService);


export {findClientTicketsService , findClientTicketsController}