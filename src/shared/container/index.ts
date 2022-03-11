import { container } from "tsyringe";

import { BatterysRepository } from "../../modules/Battery/repositories/implementation/BatterysRepository";
import { IBatterysRepository } from "../../modules/Battery/repositories/interface/IBatterysRepository";

container.registerSingleton<IBatterysRepository>(
  "BatterysRepository",
  BatterysRepository
);
