import { compare } from "bcrypt";
import dotenv from "dotenv-safe";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICollaboratorsRepository } from "../../repositories/interfaces/ICollaboratorsRepository";

dotenv.config();

interface IRequest {
  cpf: string;
  password: string;
}

interface IResponse {
  token: string;
  collaborator: {
    name: string;
    cpf: string;
  };
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject("CollaboratorsRepository")
    private collaboratorsRepository: ICollaboratorsRepository
  ) {}

  async execute({ cpf, password }: IRequest): Promise<IResponse> {
    const collaborator = await this.collaboratorsRepository.findOne(cpf);

    if (!collaborator) {
      throw new AppError("CPF or Password not valid", 400);
    }

    const checkPassword = await compare(password, collaborator.password);

    if (!checkPassword) {
      throw new AppError("CPF or Password not valid", 400);
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: collaborator.id,
      expiresIn: "1d",
    });

    const reponseReturn: IResponse = {
      token,
      collaborator: {
        name: collaborator.name,
        cpf: collaborator.cpf,
      },
    };

    return reponseReturn;
  }
}

export { CreateSessionUseCase };
