import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCollaboratorsUseCase } from "./CreateCollaboratorUseCase";

class CreateCollaboratorsController {
  async handle(request: Request, reponse: Response) {
    const { name, telNumber, cpf, password } = request.body;

    const createCollaboratorsUseCase = container.resolve(
      CreateCollaboratorsUseCase
    );

    await createCollaboratorsUseCase.execute({
      name,
      telNumber,
      cpf,
      password,
    });

    return reponse.sendStatus(201);
  }
}

export { CreateCollaboratorsController };
