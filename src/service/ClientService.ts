import { prisma } from "../database/prismaClient";
import { Client } from "../entity/Client";
import ptBR from "date-fns/locale/pt-BR";
import parse from "date-fns/parse";
import { Ticket } from "../entity/Ticket";

class ClientService {
  
  public async create(client: Client): Promise<void> {
    const { name, lastName, email, cpf, birthDate, passport } = client;
    const formattedBirthDate = parse(String(birthDate),"dd/MM/yyyy", new Date(),{locale:ptBR})
    try {
      
      if (await this.searchCpf(cpf)) throw new Error("Cpf já existente");
      if (!this.validaCPF(cpf)) throw new Error("Cpf Inválido");

      await prisma.client
        .create({
          data: {
            name,
            lastName,
            email,
            cpf,
            birthDate: new Date(formattedBirthDate),
            passport,
          },
        })
        .then();
    } catch (e: any) {
      if (!name) throw new Error("Nome obrigatório");
      if (!lastName) throw new Error("Sobrenome obrigatório");
      if (!email) throw new Error("Email obrigatório");
      if (!birthDate) throw new Error("Data de nascimento obrigatório");
      throw new Error(e);
    }
  }

  public async findAll(): Promise<Client[]> {
    try {
      const allClients = await prisma.client.findMany();
      const formattedAllClients:Client[] = allClients
      allClients.map((client,i)=>{
        formattedAllClients[i].birthDate = client.birthDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
      })      
      return formattedAllClients;
    } catch (e: any) {
      throw new Error(e);
    }
  }

  public async findOne(id: number): Promise<Client> {
    try{
      const client = await prisma.client.findUnique({
        where: {
          id,
        },
      });
      if (!client) throw new Error(`Id ${id} não encontrado!`);
      const formattedClient:Client = client
      formattedClient.birthDate = client.birthDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
      return formattedClient;
    }catch(e:any){
      throw new Error(e);
    }

  }

  public async findAllTickets(id:number): Promise<Ticket[]>{
  
    try{
      const allTickets = await prisma.ticket.findMany({
        where:{
          idClient:id
        }
      })

      return allTickets;
    }catch(e:any){
      throw new Error("Cliente não possui nenhuma passagem")
    }
  }

  public async update(id: number, client: Client): Promise<Client> {
    const { name, lastName, email, cpf, birthDate, passport } = client;
    const formattedBirthDate = parse(String(birthDate),"dd/MM/yyyy", new Date(),{locale:ptBR})
    try {
      const updatedClient = await prisma.client
        .update({
          where: {
            id,
          },
          data: {
            name,
            lastName,
            email,
            cpf,
            birthDate: new Date(formattedBirthDate),
            passport,
          },
        })
        .then();
      return updatedClient;
    } catch (e: any) {
      if (!id) throw new Error(`Id ${id} não encontrado`);
      throw new Error(e);
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      await prisma.client
        .delete({
          where: {
            id,
          },
        })
        .then();
    } catch (e: any) {
      if (!id) throw new Error(`Id ${id} não encontrado`);
      throw new Error(e);
    }
  }

  private async searchCpf(cpf: string): Promise<boolean> {
    const isCpf = await prisma.client.findUnique({
      where: {
        cpf,
      },
    });
  
    if (isCpf) return true;
  
    return false;
  }

  private validaCPF(cpf: string): boolean {
    let Soma = 0;
    let Resto;
    let strCPF = String(cpf);
  
    if (strCPF.length !== 11) return false;
  
    if (
      [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
      ].indexOf(strCPF) !== -1
    )
      return false;
  
    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
  
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;
  
    Soma = 0;
  
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
  
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  
    return true;
  }
}



export default new ClientService();
