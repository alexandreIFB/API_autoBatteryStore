import { Router } from "express";

import { BatterysRoutes } from "./batterys.routes";

const router = Router();

router.use("/nameExaples", BatterysRoutes);

export { router };
