import { Request, Response } from "express";
import { container } from "tsyringe";

import { IWhereFilter } from "../../repositories/interface/IBatteriesRepository";
import { ListBatteriesWithFiltersUseCase } from "./ListBatteriesWithFiltersUseCase";

function montaWhere(query) {
  const { c20_ah, cca_a, code, polarity, rc_min, warrantly_m } = query;
  const where: IWhereFilter = {};
  if (c20_ah) where.c20_ah = +c20_ah;
  if (cca_a) where.cca_a = +cca_a;
  if (code) where.code = code;
  if (polarity) where.polarity = polarity;
  if (rc_min) where.rc_min = +rc_min;
  if (warrantly_m) where.warrantly_m = +warrantly_m;

  return where;
}

class ListBatteriesWithFiltersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const where = montaWhere(request.query);

    const listBatteriesWithFiltersUseCase = container.resolve(
      ListBatteriesWithFiltersUseCase
    );

    const batteries = await listBatteriesWithFiltersUseCase.execute(where);

    return response.status(200).json(batteries);
  }
}

export { ListBatteriesWithFiltersController };
