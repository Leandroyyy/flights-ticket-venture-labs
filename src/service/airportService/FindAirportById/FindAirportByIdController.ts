import { FindAirportByIdService } from './FindAirportByIdService';
import { Response } from 'express';
import { Request } from 'express';


export class FindAirportByIdController{
    
    constructor(
        private findAirportByIdService:FindAirportByIdService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const airport = await this.findAirportByIdService.execute(id)

            return response.status(200).json(airport)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}