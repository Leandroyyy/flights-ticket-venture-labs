import { IClientsRepository } from "../../../repositories/IClientRepository";

export class DeleteClientService {
  constructor(private clientRepository: IClientsRepository) {}

  async execute(id: number): Promise<void> {
    await this.clientRepository.remove(id).then().catch(() => {
      throw new Error(`Cliente do id:${id} não encontrado`);
    });
  }
}
