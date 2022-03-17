import { getRepository, Repository } from "typeorm";

import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";
import {
  IBatteriesRepository,
  IBatteryFilter,
  IWhereFilter,
} from "../interface/IBatteriesRepository";

class BatteriesRepository implements IBatteriesRepository {
  private repository: Repository<Battery>;

  constructor() {
    this.repository = getRepository(Battery);
  }

  async create(batteryRequest: ICreateBatteryDTO): Promise<void> {
    const battery = this.repository.create(batteryRequest);

    await this.repository.save(battery);
  }

  async findOne(batteryParams: IBatteryFilter): Promise<Battery | undefined> {
    const battery = await this.repository.findOne(batteryParams);

    return battery;
  }

  async findByParams(where: IWhereFilter): Promise<Battery[] | undefined> {
    const battery = await this.repository.find(where);

    return battery;
  }
}

export { BatteriesRepository };
