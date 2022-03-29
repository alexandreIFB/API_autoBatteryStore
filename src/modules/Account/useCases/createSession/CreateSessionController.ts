import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSessionUseCase } from "./CreateSessionUseCase";

class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    await createSessionUseCase.execute({ cpf, password });

    return response.sendStatus(200);
  }
}

export { CreateSessionController };
