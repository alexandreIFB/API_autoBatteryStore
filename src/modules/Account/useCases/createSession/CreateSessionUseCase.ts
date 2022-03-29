import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICollaboratorsRepository } from "../../repositories/interfaces/ICollaboratorsRepository";

interface IRequest {
  cpf: string;
  password: string;
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject("CollaboratorsRepository")
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute({ cpf, password }: IRequest) {
    const collaboratorExists = await this.collaboratorsRepository.findOne(cpf);

    if (!collaboratorExists) {
      throw new AppError("CPF or Password not valid", 400);
    }

    const checkPassword = await compare(password, collaboratorExists.password);

    if (!checkPassword) {
      throw new AppError("CPF or Password not valid", 400);
    }

    console.log("Password ok");
  }
}

export { CreateSessionUseCase };
