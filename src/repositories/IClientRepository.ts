import { Client } from "../entities/Client";
import { Ticket } from "../entities/Ticket";


export interface IClientsRepository{
    save(client:Client):Promise<void>;
    findAll(): Promise<Client[]>;
    findById(id:number): Promise<Client>;
    findByCpf(cpf:string): Promise<Client>;
    findPassport(passport:string):Promise<Client[]>;
    findAllTickets(id:number):Promise<Ticket[]>;
    update(id:number,client:Client):Promise<Client>;
    remove(id:number):Promise<void>;
}