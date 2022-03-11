import { inject, injectable } from "tsyringe";

import { ICreateBatteryDTO } from "../../dtos/ICreateBatteryDTO";
import { IBatterysRepository } from "../../repositories/interface/IBatterysRepository";

@injectable()
class CreateBatteryUseCase {
  constructor(
    @inject("BatterysRepository")
    private batterysRepository: IBatterysRepository
  ) {}

  async execute(batteryParams: ICreateBatteryDTO): Promise<void> {
    const { c20_ah, cca_a, code, polarity, rc_min, warrantly_m } =
      batteryParams;

    await this.batterysRepository.create({
      c20_ah,
      cca_a,
      code,
      polarity,
      rc_min,
      warrantly_m,
    });
  }
}

export { CreateBatteryUseCase };
