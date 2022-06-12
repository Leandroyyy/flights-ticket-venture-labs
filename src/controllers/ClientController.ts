import { Request, Response} from "express";
import { Client } from "../entity/Client";
import ClientService from "../service/ClientService";

class ClientController{
    public async findAll(req:Request, res:Response):Promise<Response>{
        const allClients = await ClientService.findAll();
        return res.status(200).json(allClients);
    }
    public async findOneById(req:Request, res:Response):Promise<Response>{
        try{
        const id = Number(req.params.id);
        const client = await ClientService.findOne(id)
        return res.status(200).json(client);
        }catch(err:any){
            return res.status(404).json({message:err.message || "Unexpected error!"})
        }
    }

    public async findTickets(req:Request, res:Response):Promise<Response>{
        try{
            const id = Number(req.params.id);
            const tickets = await ClientService.findAllTickets(id)
            return res.status(200).json(tickets);
            }catch(err:any){
                return res.status(404).json({message:err.message || "Unexpected error!"})
            }
    }

    public async create(req:Request, res:Response):Promise<Response>{
        try{
            const {name, lastName, email, cpf, birthDate, passport} = req.body
            const client = new Client(name, lastName, email, cpf, birthDate, passport)
            await ClientService.create(client);
            return res.status(201).json(client)
        }catch(err:any){
            return res.status(406).json({message:err.message || "Unexpected error!"})
        }
    }

    public async update(req:Request, res:Response):Promise<Response>{
        try{
            const id = Number(req.params.id)
            const {name, lastName, email, cpf, birthDate, passport}= req.body
            const client = new Client(name, lastName, email, cpf, birthDate, passport)
            await ClientService.update(id,client)
            return res.status(200).json(client)
        }catch(err:any){
            return res.status(406).json({message:err.message || "Unexpected error!"})
        }
    }
    
    public async remove(req:Request, res:Response):Promise<Response>{
        try{
            const id = Number(req.params.id)
            await ClientService.remove(id)
            return res.status(200).send();
        }catch(err:any){
            return res.status(404).json({message:err.message || "Unexpected error!"})
        }
    }
}

export default new ClientController()