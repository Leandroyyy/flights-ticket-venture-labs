import { UpdateClientService } from './UpdateClientService';
import { PrismaClientsRepository } from './../../../repositories/implementations/PrismaClientsRepository';
import { UpdateClientController } from './UpdateClientController';

const prismaClientsRepository = new PrismaClientsRepository();

const updateClientService = new UpdateClientService(
    prismaClientsRepository
)

const updateClientController = new UpdateClientController(updateClientService);


export {updateClientService , updateClientController}