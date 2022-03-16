import { container } from "tsyringe";

import { BatteriesRepository } from "../../modules/Battery/repositories/implementation/BatteriesRepository";
import { IBatteriesRepository } from "../../modules/Battery/repositories/interface/IBatteriesRepository";

container.registerSingleton<IBatteriesRepository>(
  "BatteriesRepository",
  BatteriesRepository
);
