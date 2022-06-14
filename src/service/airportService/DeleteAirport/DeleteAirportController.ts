import { Response } from 'express';
import { Request } from 'express';
import { DeleteAirportService } from './DeleteAirportService';


export class DeleteAirportController{
    
    constructor(
        private deleteAirportService:DeleteAirportService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const airport = await this.deleteAirportService.execute(id)

            return response.status(200).send();
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}