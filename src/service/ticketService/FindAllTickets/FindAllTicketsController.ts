import { Response } from 'express';
import { Request } from 'express';
import { FindAllTicketsService } from './FindAllTicketsService';


export class FindAllTicketsController{


    constructor(
        private findAllTicketsService:FindAllTicketsService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const tickets = await this.findAllTicketsService.execute()

            return response.status(200).json(tickets)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}