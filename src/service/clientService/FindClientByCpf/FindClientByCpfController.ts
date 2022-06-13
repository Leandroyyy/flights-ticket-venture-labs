import { Response } from 'express';
import { Request } from 'express';
import { FindClientByCpfService } from './FindClientByCpfService';


export class FindClientByCpfController{
    
    constructor(
        private findClientByCpfService:FindClientByCpfService
    ){}

    async handle(request:Request, response:Response): Promise<Response>{
        try{
            const cpf = request.params.cpf
            const client = await this.findClientByCpfService.execute(cpf)

            return response.status(200).json(client)
        }catch(err:any){
            return response.status(404).json({
                message:err.message || 'Erro inesperado!'
            })
        }
    }
}