import { Client } from '../../../entities/Client';
import { transformClientDateToString } from '../validations/TransformClientDateToString';
import { IClientsRepository } from './../../../repositories/IClientRepository';



export class FindClientByIdService{
    constructor(
        private clientRepository:IClientsRepository
    ){}

    async execute(id:number):Promise<Client>{
        const client = await this.clientRepository.findById(id)

        if(!client) throw new Error(`Cliente do id:${id} não encontrado`)

        return transformClientDateToString(client);
    }
}