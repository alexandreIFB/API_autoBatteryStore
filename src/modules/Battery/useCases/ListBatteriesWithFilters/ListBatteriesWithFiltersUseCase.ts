import { inject, injectable } from "tsyringe";

import { Battery } from "../../entities/Battery";
import {
  IBatteriesRepository,
  IWhereFilter,
} from "../../repositories/interface/IBatteriesRepository";

@injectable()
class ListBatteriesWithFiltersUseCase {
  constructor(
    @inject("BatteriesRepository")
    private batteriesRepository: IBatteriesRepository
  ) {}

  async execute(where: IWhereFilter): Promise<Battery[] | undefined> {
    const batteries = await this.batteriesRepository.findByParams(where);

    return batteries;
  }
}

export { ListBatteriesWithFiltersUseCase };
