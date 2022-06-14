import { PrismaTicketRepository } from "../../../repositories/implementations/PrismaTicketRepository";
import { FindAllTicketsController } from "./FindAllTicketsController";
import { FindAllTicketsService } from "./FindAllTicketsService";


const prismaTicketRepository = new PrismaTicketRepository();

const findAllTicketsService = new FindAllTicketsService(
    prismaTicketRepository
)

const findAllTicketsController = new FindAllTicketsController(findAllTicketsService);


export {findAllTicketsService , findAllTicketsController}