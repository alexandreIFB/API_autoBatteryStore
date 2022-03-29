import dotenv from "dotenv-safe";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { CollaboratorsRepository } from "../modules/Account/repositories/implementations/CollaboratorsRepository";

dotenv.config();

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token invalid", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: collaborator_id } = verify(
      token,
      process.env.JWT_SECRET
    ) as IPayload;

    const collaboratorsRepository = new CollaboratorsRepository();

    const collaborator = await collaboratorsRepository.findById(
      collaborator_id
    );

    if (!collaborator) {
      throw new AppError("User not exists", 401);
    }

    request.collaborator = {
      id: collaborator_id,
    };

    next();
  } catch {
    throw new AppError("Token invalid", 401);
  }
}
