import { response, Router } from 'express';
import { request } from 'http';
import { routes } from '../route';
import { createClientController } from '../service/clientService/CreateClient';
import { deleteClientController } from '../service/clientService/DeleteClient';
import { findAllClientsController } from '../service/clientService/FindAllClients';
import { findClientByCpfController } from '../service/clientService/FindClientByCpf';
import { findClientByIdController } from '../service/clientService/FindClientById';
import { findClientTicketsController } from '../service/clientService/FindClientTickets';
import { updateClientController } from '../service/clientService/UpdateClient';


const clientRoutes = Router()


clientRoutes.get("/client/:id", (request,response)=>{
    return findClientByIdController.handle(request,response);
})

clientRoutes.get("/client/:id/ticket", (request,response) =>{
    return findClientTicketsController.handle(request,response);
})

clientRoutes.get("/client/cpf/:cpf", (request,response)=>{
    return findClientByCpfController.handle(request,response);
})

clientRoutes.get("/client", (request,response)=>{
    return findAllClientsController.handle(request,response);
})

clientRoutes.post("/client", (request,response)=>{
    return createClientController.handle(request,response);
});

clientRoutes.put("/client/:id", (request,response)=>{
    return updateClientController.handle(request,response);
})

clientRoutes.delete("/client/:id", (request,response)=>{
    return deleteClientController.handle(request,response);
})

export {clientRoutes}