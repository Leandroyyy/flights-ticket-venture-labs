import { Client } from "../../../entities/Client";
import { IClientsRepository } from "../../../repositories/IClientRepository";
import { transformClientsListDateToString } from '../validations/TransformClientDateToString';



export class FindAllClientsService{

    constructor(
        private clientsRepository:IClientsRepository
    ){}

    async execute():Promise<Client[]>{

        const allClients = await this.clientsRepository.findAll();

        return transformClientsListDateToString(allClients);
    }
}