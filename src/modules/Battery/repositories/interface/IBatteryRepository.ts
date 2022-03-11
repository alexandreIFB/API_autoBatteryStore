import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";

interface IBatteryRepository {
  create(batteryRequest: ICreateBatteryDTO): Promise<void>;
}

export { IBatteryRepository };
