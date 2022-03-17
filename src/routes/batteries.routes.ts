import { Router } from "express";

import { CreateBatteryController } from "../modules/Battery/useCases/createBattery/CreateBatteryController";
import { ListBatteriesWithFiltersController } from "../modules/Battery/useCases/ListBatteriesWithFilters/ListBatteriesWithFiltersController";

const BatteriesRoutes = Router();

const createBatteryController = new CreateBatteryController();
const listBatteriesWithFiltersController =
  new ListBatteriesWithFiltersController();

BatteriesRoutes.post("", createBatteryController.handle);
BatteriesRoutes.get("", listBatteriesWithFiltersController.handle);

export { BatteriesRoutes };
