import { PrismaFlightsRepository } from "../../../repositories/implementations/PrismaFlightsRepository";
import { PrismaTicketRepository } from "../../../repositories/implementations/PrismaTicketRepository";
import { DeleteTicketController } from "./DeleteTicketController";
import { DeleteTicketService } from "./DeleteTicketService";


const prismaTicketRepository = new PrismaTicketRepository();
const prismaFlightRepository = new PrismaFlightsRepository();

const deleteTicketService = new DeleteTicketService(
    prismaTicketRepository,
    prismaFlightRepository
)

const deleteTicketController = new DeleteTicketController(deleteTicketService);


export {deleteTicketService , deleteTicketController}