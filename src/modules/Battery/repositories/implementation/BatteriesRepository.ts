import { getRepository, Repository } from "typeorm";

import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";
import { IBatteriesRepository } from "../interface/IBatteriesRepository";

class BatteriesRepository implements IBatteriesRepository {
  private repository: Repository<Battery>;

  constructor() {
    this.repository = getRepository(Battery);
  }

  async create(batteryRequest: ICreateBatteryDTO): Promise<void> {
    const battery = this.repository.create(batteryRequest);

    await this.repository.save(battery);
  }

  async findOneByParams({
    c20_ah,
    cca_a,
    code,
    polarity,
    rc_min,
    warrantly_m,
  }: ICreateBatteryDTO): Promise<Battery> {
    const battery = await this.repository.findOne({
      c20_ah,
      cca_a,
      code,
      polarity,
      rc_min,
      warrantly_m,
    });

    return battery;
  }
}

export { BatteriesRepository };
