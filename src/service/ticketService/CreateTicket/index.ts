import { PrismaClientsRepository } from '../../../repositories/implementations/PrismaClientsRepository';
import { PrismaFlightsRepository } from '../../../repositories/implementations/PrismaFlightsRepository';
import { PrismaTicketRepository } from '../../../repositories/implementations/PrismaTicketRepository';
import { CreateTicketController } from './CreateTicketController';
import { CreateTicketService } from './CreateTicketService';


const prismaTicketRepository = new PrismaTicketRepository();
const prismaFlightsRepository = new PrismaFlightsRepository();
const prismaClientsRepository = new PrismaClientsRepository();

const createTicketService = new CreateTicketService(
    prismaTicketRepository,prismaFlightsRepository,prismaClientsRepository
)

const createTicketController = new CreateTicketController(createTicketService);


export {createTicketService , createTicketController}