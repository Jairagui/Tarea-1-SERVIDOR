import type { Request, Response, NextFunction } from "express";
import { ValidationError } from "../errors/ValidationError.js";

// Express reconoce este middleware como de errores porque recibe 4 parametros.
// Los errores que lanza el service llegan aqui solos

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      message: err.message,
    });
  }

  console.error(err);
  res.status(500).json({
    message: "Internal server error",
  });
};
