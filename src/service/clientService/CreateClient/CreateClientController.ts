import { CreateClientService } from './CreateClientService';
import { Response } from 'express';
import { Request } from 'express';

export class CreateClientController{

    constructor(
        private createClientService:CreateClientService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        const { name, lastName, email, cpf, birthDate, passport } = request.body;
        try{
            await this.createClientService.execute({
                name,
                lastName,
                email,
                cpf,
                birthDate,
                passport
            })

            return response.status(201).send(); 
        }catch(err:any){
            return response.status(400).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    };
}