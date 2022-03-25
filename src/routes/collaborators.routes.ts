import { Router } from "express";

import { CreateCollaboratorsController } from "../modules/Account/useCases/createCollaborator/CreateCollaboratorsController";

const CollaboratorsRoutes = Router();

const createCollaboratorsController = new CreateCollaboratorsController();

CollaboratorsRoutes.post("", createCollaboratorsController.handle);

export { CollaboratorsRoutes };
