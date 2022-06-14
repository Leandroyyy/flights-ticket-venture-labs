import { DeleteTicketService } from './DeleteTicketService';
import { Response } from 'express';
import { Request } from 'express';


export class DeleteTicketController{
    
    constructor(
        private deleteTicketService:DeleteTicketService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            await this.deleteTicketService.execute(id)

            return response.status(200).send()
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}