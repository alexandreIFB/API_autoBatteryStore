import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBatteryUseCase } from "./CreateBatteryUseCase";

class CreateBatteryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { c20_ah, cca_a, code, polarity, rc_min, warrantly_m } = request.body;
    const createBatteryUseCase = container.resolve(CreateBatteryUseCase);

    await createBatteryUseCase.execute({
      c20_ah,
      cca_a,
      code,
      polarity,
      rc_min,
      warrantly_m,
    });

    return response.sendStatus(201);
  }
}

export { CreateBatteryController };
