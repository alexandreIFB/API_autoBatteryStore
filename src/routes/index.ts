import { Router } from "express";

import { AuthenticateRoutes } from "./authenticate.routes";
import { BatteriesRoutes } from "./batteries.routes";
import { CollaboratorsRoutes } from "./collaborators.routes";

const router = Router();

router.use("/batteries", BatteriesRoutes);

router.use("/collaborators", CollaboratorsRoutes);

router.use("/authenticate", AuthenticateRoutes);

export { router };
