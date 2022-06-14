import { Response } from 'express';
import { Request } from 'express';
import { DeleteFlightService } from './DeleteFlightService';


export class DeleteFlightController{
    
    constructor(
        private deleteFlightService:DeleteFlightService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            await this.deleteFlightService.execute(id)

            return response.status(200).send();
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}