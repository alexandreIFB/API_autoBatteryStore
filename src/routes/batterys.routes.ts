import { Router } from "express";

import { CreateBatteryController } from "../modules/Battery/useCases/createBattery/CreateBatteryController";

const BatterysRoutes = Router();

const createBatteryController = new CreateBatteryController();

BatterysRoutes.post("", createBatteryController.handle);

export { BatterysRoutes };
