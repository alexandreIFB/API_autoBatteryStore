import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";
import {
  IBatteriesRepository,
  IBatteryFilter,
  IWhereFilter,
} from "../interface/IBatteriesRepository";

class BatteriesRepositoryInMemory implements IBatteriesRepository {
  batteries: Battery[] = [];

  async create(batteryRequest: ICreateBatteryDTO): Promise<void> {
    const battery = new Battery();

    Object.assign(battery, batteryRequest);

    this.batteries.push(battery);
  }

  async findOne({
    c20_ah,
    cca_a,
    code,
    polarity,
    rc_min,
    warrantly_m,
  }: IBatteryFilter): Promise<Battery | undefined> {
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

  async findByParams({
    c20_ah,
    cca_a,
    code,
    polarity,
    rc_min,
    warrantly_m,
  }: IWhereFilter): Promise<Battery[] | undefined> {
    const battery = this.batteries.filter(
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
