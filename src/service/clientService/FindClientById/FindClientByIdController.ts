import { Response } from 'express';
import { Request } from 'express';
import { FindClientByIdService } from './FindClientByIdService';


export class FindClientByIdController{
    
    constructor(
        private findClientByIdService:FindClientByIdService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const client = await this.findClientByIdService.execute(id)

            return response.status(200).json(client)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}