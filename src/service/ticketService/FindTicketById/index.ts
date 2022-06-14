import { PrismaTicketRepository } from "../../../repositories/implementations/PrismaTicketRepository";
import { FindTicketByIdController } from "./FindTicketByIdController";
import { FindTicketByIdService } from "./FindTicketByIdService";


const prismaTicketRepository = new PrismaTicketRepository();

const findTicketByIdService = new FindTicketByIdService(
    prismaTicketRepository
)

const findTicketByIdController = new FindTicketByIdController(findTicketByIdService);


export {findTicketByIdService , findTicketByIdController}