import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { IBatteriesRepository } from "../../repositories/interface/IBatteriesRepository";

@injectable()
class CreateBatteryUseCase {
  constructor(
    @inject("BatteriesRepository")
    private batteriesRepository: IBatteriesRepository
  ) {}

  async execute(batteryParams: ICreateBatteryDTO): Promise<void> {
    const categoryAlreadyExist = await this.batteriesRepository.findOne(
      batteryParams
    );

    if (categoryAlreadyExist) {
      throw new AppError("Battery Already Exists", 400);
    }

    await this.batteriesRepository.create(batteryParams);
  }
}

export { CreateBatteryUseCase };
