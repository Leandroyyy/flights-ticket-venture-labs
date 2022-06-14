import { PrismaAirportsRepository } from "../../../repositories/implementations/PrismaAirportsRepository";
import { FindAirportByIdController } from "./FindAirportByIdController";
import { FindAirportByIdService } from "./FindAirportByIdService";

i
const prismaAirportsRepository = new PrismaAirportsRepository();

const findAirportByIdService = new FindAirportByIdService(
    prismaAirportsRepository
)

const findAirportByIdController = new FindAirportByIdController(findAirportByIdService);


export {findAirportByIdService , findAirportByIdController}