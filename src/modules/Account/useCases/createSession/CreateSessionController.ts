import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSessionUseCase } from "./CreateSessionUseCase";

class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    const createSessionUseCase = container.resolve(CreateSessionUseCase);

    const responseReturn = await createSessionUseCase.execute({
      cpf,
      password,
    });

    return response.status(201).json(responseReturn);
  }
}

export { CreateSessionController };
