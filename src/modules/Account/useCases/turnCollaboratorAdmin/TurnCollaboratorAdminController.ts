import { Request, Response } from "express";
import { container } from "tsyringe";

import { TurnCollaboratorAdminUseCase } from "./TurnCollaboratorAdminUseCase";

class TurnCollaboratorAdminController {
  async handle(request: Request, response: Response) {
    const { cpf } = request.params;

    const turnCollaboratorAdminUseCase = container.resolve(
      TurnCollaboratorAdminUseCase
    );

    await turnCollaboratorAdminUseCase.execute(cpf);

    return response.sendStatus(200);
  }
}

export { TurnCollaboratorAdminController };
