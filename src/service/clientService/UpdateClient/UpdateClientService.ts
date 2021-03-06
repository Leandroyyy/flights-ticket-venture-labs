import { IUpdateClientRequestDTO } from './UpdateClientDTO';
import { IClientsRepository } from '../../../repositories/IClientRepository';
import { Client } from '../../../entities/Client';
import ptBR from "date-fns/locale/pt-BR";
import parse from "date-fns/parse";
import { prisma } from '../../../database/prismaClient';
import { validateCpf } from '../validations/ValidateCpf';


export class UpdateClientService{

    constructor(
        private clientsRepository:IClientsRepository
    ){}

    async execute(id:number,data:IUpdateClientRequestDTO):Promise<void>{

        const cpfAlreadyExists = await this.clientsRepository.findByCpf(data.cpf)
        
        if(cpfAlreadyExists) throw new Error("CPF já existente");

        const client = new Client(data);
        const { name, lastName, email, cpf, birthDate, passport } = client;
        
        if (!validateCpf(cpf)) throw new Error("Cpf Inválido");  

        const formattedBirthDate = parse(String(birthDate),"dd/MM/yyyy", new Date(),{locale:ptBR})

        if (!name || name.trim() == "") throw new Error("Nome obrigatório");
        if (!lastName || lastName.trim() == "") throw new Error("Sobrenome obrigatório");
        if (!email || email.trim() == "") throw new Error("Email obrigatório");
        if (!birthDate || birthDate == "") throw new Error("Data de nascimento obrigatório");
        client.birthDate = formattedBirthDate

        await this.clientsRepository.update(id,client);
    }
}