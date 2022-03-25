import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateCollaboratorsDTO } from "../../repositories/dtos/ICreateCollaboratorDTO";
import { ICollaboratorsRepository } from "../../repositories/interfaces/ICollaboratorsRepository";

@injectable()
class CreateCollaboratorsUseCase {
  constructor(
    @inject("CollaboratorsRepository")
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute(newColaborator: ICreateCollaboratorsDTO): Promise<void> {
    const collaboratorExists = await this.collaboratorsRepository.findOne(
      newColaborator.cpf
    );

    if (collaboratorExists)
      throw new AppError("Collborator With CPF Already Exists");

    await this.collaboratorsRepository.create(newColaborator);
  }
}

export { CreateCollaboratorsUseCase };
