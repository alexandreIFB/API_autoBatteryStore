import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { Battery } from "../../entities/Battery";

interface IWhereFilter {
  c20_ah?: number;
  polarity?: string;
  cca_a?: number;
  rc_min?: number;
  warrantly_m?: number;
  code?: string;
}

interface IBatteryFilter {
  c20_ah: number;
  polarity: string;
  cca_a: number;
  rc_min: number;
  warrantly_m: number;
  code: string;
}

interface IBatteriesRepository {
  create(batteryRequest: ICreateBatteryDTO): Promise<void>;
  findOne(batteryParams: IBatteryFilter): Promise<Battery | undefined>;
  findByParams(whereFilter: IWhereFilter): Promise<Battery[] | undefined>;
}

export { IBatteriesRepository, IWhereFilter, IBatteryFilter };
