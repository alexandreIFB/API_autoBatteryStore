import { container } from "tsyringe";

import { CollaboratorsRepository } from "../../modules/Account/repositories/implementations/CollaboratorsRepository";
import { ICollaboratorsRepository } from "../../modules/Account/repositories/interfaces/ICollaboratorsRepository";
import { BatteriesRepository } from "../../modules/Battery/repositories/implementation/BatteriesRepository";
import { IBatteriesRepository } from "../../modules/Battery/repositories/interface/IBatteriesRepository";

container.registerSingleton<IBatteriesRepository>(
  "BatteriesRepository",
  BatteriesRepository
);

container.registerSingleton<ICollaboratorsRepository>(
  "CollaboratorsRepository",
  CollaboratorsRepository
);
