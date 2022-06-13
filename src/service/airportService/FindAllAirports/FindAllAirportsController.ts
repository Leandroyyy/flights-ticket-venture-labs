import { Response } from 'express';
import { Request } from 'express';
import { FindAllAirportsService } from './FindAllAirportsService';


export class FindAllAirportsController{


    constructor(
        private findAllAirportsService:FindAllAirportsService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const airports = await this.findAllAirportsService.execute()

            return response.status(200).json(airports)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}