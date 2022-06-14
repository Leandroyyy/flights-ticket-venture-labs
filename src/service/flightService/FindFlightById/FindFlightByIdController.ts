import { Response } from 'express';
import { Request } from 'express';
import { FindFlightByIdService } from './FindFlightByIdService';


export class FindFlightByIdController{
    
    constructor(
        private findFlightByIdService:FindFlightByIdService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const flight = await this.findFlightByIdService.execute(id)

            return response.status(200).json(flight)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}