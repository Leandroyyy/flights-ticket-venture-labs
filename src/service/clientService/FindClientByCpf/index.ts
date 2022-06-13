import { FindClientByCpfController } from './FindClientByCpfController';
import { FindClientByCpfService } from './FindClientByCpfService';
import { PrismaClientsRepository } from "../../../repositories/implementations/PrismaClientsRepository";


const prismaClientsRepository = new PrismaClientsRepository();

const findClientByCpfService = new FindClientByCpfService(
    prismaClientsRepository
)

const findClientByCpfController = new FindClientByCpfController(findClientByCpfService);


export {findClientByCpfService , findClientByCpfController}