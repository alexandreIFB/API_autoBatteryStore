import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";

interface IBatteriesRepository {
  create(batteryRequest: ICreateBatteryDTO): Promise<void>;
  findOneByParams({
    c20_ah,
    cca_a,
    code,
    polarity,
    rc_min,
    warrantly_m,
  }: ICreateBatteryDTO): Promise<Battery>;
}

export { IBatteriesRepository };
