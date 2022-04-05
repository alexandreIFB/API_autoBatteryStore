import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICollaboratorsRepository } from "../../repositories/interfaces/ICollaboratorsRepository";

@injectable()
class TurnCollaboratorAdminUseCase {
  constructor(
    @inject("CollaboratorsRepository")
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute(cpf: string): Promise<void> {
    const collaborator = await this.collaboratorsRepository.findOne(cpf);

    if (!collaborator) {
      throw new AppError("Collaborator not exist");
    }

    collaborator.admin = true;

    await this.collaboratorsRepository.turnAdmin(collaborator);
  }
}

export { TurnCollaboratorAdminUseCase };
