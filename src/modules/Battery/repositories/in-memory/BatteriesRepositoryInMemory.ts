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

  async findByParams(where: IWhereFilter): Promise<Battery[] | undefined> {
    if (Object.keys(where).length !== 0) {
      let battery = this.batteries;

      if (where.c20_ah) {
        battery = battery.filter(
          (oneBattery) => oneBattery.c20_ah === where.c20_ah
        );
      }

      if (where.cca_a) {
        battery = battery.filter(
          (oneBattery) => oneBattery.cca_a === where.cca_a
        );
      }
      if (where.code) {
        battery = battery.filter(
          (oneBattery) => oneBattery.code === where.code
        );
      }
      if (where.polarity) {
        battery = battery.filter(
          (oneBattery) => oneBattery.polarity === where.polarity
        );
      }
      if (where.rc_min) {
        battery = battery.filter(
          (oneBattery) => oneBattery.rc_min === where.rc_min
        );
      }
      if (where.warrantly_m) {
        battery = battery.filter(
          (oneBattery) => oneBattery.warrantly_m === where.warrantly_m
        );
      }

      return battery;
    }

    return this.batteries;
  }
}

export { BatteriesRepositoryInMemory };
