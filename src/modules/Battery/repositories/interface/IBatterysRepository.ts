import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";

interface IBatterysRepository {
  create(batteryRequest: ICreateBatteryDTO): Promise<void>;
}

export { IBatterysRepository };
