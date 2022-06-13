import { DeleteClientController } from './DeleteClientController';
import { DeleteClientService } from './DeleteClientService';
import { PrismaClientsRepository } from "../../../repositories/implementations/PrismaClientsRepository";


const prismaClientsRepository = new PrismaClientsRepository();

const deleteClientService = new DeleteClientService(
    prismaClientsRepository
)

const deleteClientController = new DeleteClientController(deleteClientService);


export {deleteClientService , deleteClientController}