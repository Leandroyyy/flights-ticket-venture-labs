import { FindTicketByIdService } from './FindTicketByIdService';
import { Response } from 'express';
import { Request } from 'express';


export class FindTicketByIdController{
    
    constructor(
        private findTicketByIdService:FindTicketByIdService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const ticket = await this.findTicketByIdService.execute(id)

            return response.status(200).json(ticket)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}