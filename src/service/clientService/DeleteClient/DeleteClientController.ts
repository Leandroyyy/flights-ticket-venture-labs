import { Response } from 'express';
import { Request } from 'express';
import { DeleteClientService } from './DeleteClientService';


export class DeleteClientController{
    
    constructor(
        private deleteClientService:DeleteClientService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const id = Number(request.params.id)
            const client = await this.deleteClientService.execute(id)

            return response.status(200).send();
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}