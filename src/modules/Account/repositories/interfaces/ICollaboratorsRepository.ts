import { ICreateCollaboratorsDTO } from "../dtos/ICreateCollaboratorDTO";

interface ICollaboratorsRepository {
  create(newColaborator: ICreateCollaboratorsDTO): Promise<void>;
}

export { ICollaboratorsRepository };
