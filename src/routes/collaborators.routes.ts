import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { isAdmin } from "../middlewares/IsAdmin";
import { CreateCollaboratorsController } from "../modules/Account/useCases/createCollaborator/CreateCollaboratorsController";
import { TurnCollaboratorAdminController } from "../modules/Account/useCases/turnCollaboratorAdmin/TurnCollaboratorAdminController";

const CollaboratorsRoutes = Router();

const createCollaboratorsController = new CreateCollaboratorsController();
const turnCollaboratorAdminController = new TurnCollaboratorAdminController();

CollaboratorsRoutes.post("", createCollaboratorsController.handle);

CollaboratorsRoutes.patch(
  "/:cpf/admin",
  ensureAuthenticated,
  isAdmin,
  turnCollaboratorAdminController.handle
);

export { CollaboratorsRoutes };
