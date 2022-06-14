import { PrismaClientsRepository } from "../../../repositories/implementations/PrismaClientsRepository";
import { PrismaFlightsRepository } from "../../../repositories/implementations/PrismaFlightsRepository";
import { PrismaTicketRepository } from "../../../repositories/implementations/PrismaTicketRepository";
import { UpdateTicketController } from "./UpdateTicketController";
import { UpdateTicketService } from "./UpdateTicketService";


const prismaTicketRepository = new PrismaTicketRepository();
const prismaFlightsRepository = new PrismaFlightsRepository();
const prismaClientsRepository = new PrismaClientsRepository();

const updateTicketService = new UpdateTicketService(
    prismaTicketRepository,prismaFlightsRepository,prismaClientsRepository
)

const updateTicketController = new UpdateTicketController(updateTicketService);


export {updateTicketService , updateTicketController}