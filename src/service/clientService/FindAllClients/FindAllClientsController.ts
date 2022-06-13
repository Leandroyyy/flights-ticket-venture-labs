import { Response } from 'express';
import { Request } from 'express';
import { FindAllClientsService } from './FindAllClientsService';


export class FindAllClientsController{


    constructor(
        private findAllClientsService:FindAllClientsService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const clients = await this.findAllClientsService.execute()

            return response.status(200).json(clients)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}