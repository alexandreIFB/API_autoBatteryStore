import { Collaborator } from "../../entities/Collaborator";
import { ICreateCollaboratorsDTO } from "../dtos/ICreateCollaboratorDTO";
import { ICollaboratorsRepository } from "../interfaces/ICollaboratorsRepository";

class CollaboratorsRepositoryInMemory implements ICollaboratorsRepository {
  batteries: Collaborator[] = [];

  async create(newColaborator: ICreateCollaboratorsDTO): Promise<void> {
    const collaborator = new Collaborator();

    Object.assign(collaborator, newColaborator);

    this.batteries.push(collaborator);
  }
  async findOne(cpf: string): Promise<Collaborator> {
    const collaborator = this.batteries.find(
      (collaborator) => collaborator.cpf === cpf
    );

    return collaborator;
  }

  async findById(id: string): Promise<Collaborator> {
    const collaborator = this.batteries.find(
      (collaborator) => collaborator.id === id
    );

    return collaborator;
  }
}

export { CollaboratorsRepositoryInMemory };
