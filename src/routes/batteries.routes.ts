import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { isAdmin } from "../middlewares/IsAdmin";
import { CreateBatteryController } from "../modules/Battery/useCases/createBattery/CreateBatteryController";
import { ListBatteriesWithFiltersController } from "../modules/Battery/useCases/ListBatteriesWithFilters/ListBatteriesWithFiltersController";

const BatteriesRoutes = Router();

const createBatteryController = new CreateBatteryController();
const listBatteriesWithFiltersController =
  new ListBatteriesWithFiltersController();

BatteriesRoutes.post(
  "",
  ensureAuthenticated,
  isAdmin,
  createBatteryController.handle
);
BatteriesRoutes.get(
  "",
  ensureAuthenticated,
  listBatteriesWithFiltersController.handle
);

export { BatteriesRoutes };
