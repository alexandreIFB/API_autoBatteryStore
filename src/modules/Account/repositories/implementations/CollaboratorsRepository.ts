import { getRepository, Repository } from "typeorm";

import { Collaborator } from "../../entities/Collaborator";
import { ICreateCollaboratorsDTO } from "../dtos/ICreateCollaboratorDTO";
import { ICollaboratorsRepository } from "../interfaces/ICollaboratorsRepository";

class CollaboratorsRepository implements ICollaboratorsRepository {
  private repository: Repository<Collaborator>;

  constructor() {
    this.repository = getRepository(Collaborator);
  }

  async create(newColaborator: ICreateCollaboratorsDTO): Promise<void> {
    const collaborator = this.repository.create(newColaborator);

    await this.repository.save(collaborator);
  }

  async findOne(cpf: string): Promise<Collaborator> {
    const collaborator = await this.repository.findOne({ cpf });

    return collaborator;
  }
}

export { CollaboratorsRepository };
