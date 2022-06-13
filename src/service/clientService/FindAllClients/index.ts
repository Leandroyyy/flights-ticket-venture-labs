import { PrismaClientsRepository } from './../../../repositories/implementations/PrismaClientsRepository';
import { FindAllClientsController } from './FindAllClientsController';
import { FindAllClientsService } from "./FindAllClientsService";


const prismaClientsRepository = new PrismaClientsRepository();

const findAllClientService = new FindAllClientsService(
    prismaClientsRepository
)

const findAllClientsController = new FindAllClientsController(findAllClientService);


export {findAllClientService , findAllClientsController}