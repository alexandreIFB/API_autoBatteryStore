import { Router } from "express";

import { nameExaplesRoutes } from "./nameExaples.routes";

const router = Router();

router.use("/nameExaples", nameExaplesRoutes);

export { router };
