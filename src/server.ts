import "reflect-metadata";

import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerConfig from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3000, () => console.log("Server is running !!"));
