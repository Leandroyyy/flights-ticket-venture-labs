import { Client } from '../../../entities/Client';
import { transformClientDateToString } from '../validations/TransformClientDateToString';
import { IClientsRepository } from '../../../repositories/IClientRepository';
import { validateCpf } from '../validations/ValidateCpf';



export class FindClientByCpfService{
    constructor(
        private clientRepository:IClientsRepository
    ){}

    async execute(cpf:string):Promise<Client>{

        if(!validateCpf(cpf)) throw new Error("Por favor digite um cpf válido!")

        const client = await this.clientRepository.findByCpf(cpf)

        if(!client) throw new Error(`Cliente do cpf:${cpf} não encontrado`)

        return transformClientDateToString(client);
    }
}