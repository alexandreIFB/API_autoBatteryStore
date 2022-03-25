import { Router } from "express";

import { BatteriesRoutes } from "./batteries.routes";
import { CollaboratorsRoutes } from "./collaborators.routes";

const router = Router();

router.use("/batteries", BatteriesRoutes);

router.use("/collaborators", CollaboratorsRoutes);

export { router };
