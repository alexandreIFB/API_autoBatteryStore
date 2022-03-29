import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { CollaboratorsRepository } from "../modules/Account/repositories/implementations/CollaboratorsRepository";

export async function isAdmin(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  const { id: collaborator_id } = request.collaborator;

  if (!collaborator_id) {
    throw new AppError("Collaborator not allowed for this action", 403);
  }

  const collaboratorsRepository = new CollaboratorsRepository();

  const collaborator = await collaboratorsRepository.findById(collaborator_id);

  if (!collaborator.admin) {
    throw new AppError("Collaborator not allowed for this action", 403);
  }

  next();
}
