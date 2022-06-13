import { Client } from "../../../entities/Client";
import { transformClientDateToString } from "../validations/TransformClientDateToString";
import { IClientsRepository } from "../../../repositories/IClientRepository";

export class DeleteClientService {
  constructor(private clientRepository: IClientsRepository) {}

  async execute(id: number): Promise<void> {
    await this.clientRepository.remove(id).then()
  }
}
