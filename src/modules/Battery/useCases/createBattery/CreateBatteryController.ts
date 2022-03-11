import { Request, Response } from "express";

class CreateBatteryController {
  handle(request: Request, response: Response) {
    return response.sendStatus(200);
  }
}

export { CreateBatteryController };
