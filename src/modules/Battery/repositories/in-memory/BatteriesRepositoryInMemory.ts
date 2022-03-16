import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";
import { IBatteriesRepository } from "../interface/IBatteriesRepository";

class BatteriesRepositoryInMemory implements IBatteriesRepository {
  batteries: Battery[] = [];

  async create(batteryRequest: ICreateBatteryDTO): Promise<void> {
    const battery = new Battery();

    Object.assign(battery, batteryRequest);

    this.batteries.push(battery);
  }

  async findOneByParams({
    c20_ah,
    cca_a,
    code,
    polarity,
    rc_min,
    warrantly_m,
  }: ICreateBatteryDTO): Promise<Battery> {
    const battery = this.batteries.find(
      (oneBattery) =>
        oneBattery.c20_ah === c20_ah &&
        oneBattery.cca_a === cca_a &&
        oneBattery.code === code &&
        oneBattery.polarity === polarity &&
        oneBattery.rc_min === rc_min &&
        oneBattery.warrantly_m === warrantly_m
    );

    return battery;
  }
}

export { BatteriesRepositoryInMemory };
