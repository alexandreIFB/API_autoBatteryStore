import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateNameExampleUseCase } from "./CreateNameExampleUseCase";

class CreateNameExampleController {
  handle(request: Request, response: Response): Response {
    const createNameExampleUseCase = container.resolve(
      CreateNameExampleUseCase
    );

    const { name, description } = request.body;

    createNameExampleUseCase.execute({ name, description });

    return response.sendStatus(201);
  }
}

export { CreateNameExampleController };
