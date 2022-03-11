import { Router } from "express";

import { BatterysRoutes } from "./batterys.routes";

const router = Router();

router.use("/batterys", BatterysRoutes);

export { router };
