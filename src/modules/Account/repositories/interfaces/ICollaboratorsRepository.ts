import { Collaborator } from "../../entities/Collaborator";
import { ICreateCollaboratorsDTO } from "../dtos/ICreateCollaboratorDTO";

interface ICollaboratorsRepository {
  create(newColaborator: ICreateCollaboratorsDTO): Promise<void>;
  findOne(cpf: string): Promise<Collaborator>;
  findById(id: string): Promise<Collaborator>;
}

export { ICollaboratorsRepository };
