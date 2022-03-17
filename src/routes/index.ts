import { Router } from "express";

import { BatteriesRoutes } from "./batteries.routes";

const router = Router();

router.use("/batteries", BatteriesRoutes);

export { router };
