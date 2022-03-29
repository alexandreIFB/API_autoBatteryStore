import { hash } from "bcrypt";
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
    const { cpf, name, password, telNumber } = newColaborator;

    const collaboratorExists = await this.collaboratorsRepository.findOne(cpf);

    if (collaboratorExists)
      throw new AppError("Collborator With CPF Already Exists");

    const passwordHash = await hash(password, 8);

    await this.collaboratorsRepository.create({
      cpf,
      name,
      password: passwordHash,
      telNumber,
    });
  }
}

export { CreateCollaboratorsUseCase };
