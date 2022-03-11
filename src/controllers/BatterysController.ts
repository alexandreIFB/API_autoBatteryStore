import { Battery } from "@models/Battery";
import { Request, Response } from "express";

class BatterysController {
  async create(request: Request, response: Response): Promise<Response> {
    const battery = new Battery();
    return response.sendStatus(200);
  }
}

export { BatterysController };
