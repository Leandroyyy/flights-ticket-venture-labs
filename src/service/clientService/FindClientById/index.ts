import { FindClientByIdController } from './FindClientByIdController';
import { FindClientByIdService } from './FindClientByIdService';
import { PrismaClientsRepository } from "../../../repositories/implementations/PrismaClientsRepository";


const prismaClientsRepository = new PrismaClientsRepository();

const findClientByIdService = new FindClientByIdService(
    prismaClientsRepository
)

const findClientByIdController = new FindClientByIdController(findClientByIdService);


export {findClientByIdService , findClientByIdController}