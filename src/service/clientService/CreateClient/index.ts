import { CreateClientService } from './CreateClientService';
import { PrismaClientsRepository } from './../../../repositories/implementations/PrismaClientsRepository';
import { CreateClientController } from './CreateClientController';

const prismaClientsRepository = new PrismaClientsRepository();

const createClientService = new CreateClientService(
    prismaClientsRepository
)

const createClientController = new CreateClientController(createClientService);


export {createClientService , createClientController}