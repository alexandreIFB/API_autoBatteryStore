import { Router } from "express";

import { CreateNameExampleController } from "../modules/name_module_example/useCases/NameExample/createNameExample/CreateNameExampleController";

const createNameExampleController = new CreateNameExampleController();

const nameExaplesRoutes = Router();

nameExaplesRoutes.post("", createNameExampleController.handle);

export { nameExaplesRoutes };
