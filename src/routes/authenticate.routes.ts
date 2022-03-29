import { Router } from "express";

import { CreateSessionController } from "../modules/Account/useCases/createSession/CreateSessionController";

const AuthenticateRoutes = Router();

const createSessionController = new CreateSessionController();

AuthenticateRoutes.post("", createSessionController.handle);

export { AuthenticateRoutes };
