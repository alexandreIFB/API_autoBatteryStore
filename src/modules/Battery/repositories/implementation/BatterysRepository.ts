import { getRepository, Repository } from "typeorm";

import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";
import { IBatterysRepository } from "../interface/IBatterysRepository";

class BatterysRepository implements IBatterysRepository {
  private repository: Repository<Battery>;

  constructor() {
    this.repository = getRepository(Battery);
  }

  async create(batteryRequest: ICreateBatteryDTO): Promise<void> {
    const battery = this.repository.create(batteryRequest);

    await this.repository.save(battery);
  }
}

export { BatterysRepository };
