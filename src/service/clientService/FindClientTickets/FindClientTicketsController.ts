import { Response } from 'express';
import { Request } from 'express';
import { FindClientTicketsService } from './FindClientTicketsService';


export class FindClientTicketsController{
    
    constructor(
        private findClientTicketsService:FindClientTicketsService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const tickets = await this.findClientTicketsService.execute(id)

            return response.status(200).json(tickets)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}