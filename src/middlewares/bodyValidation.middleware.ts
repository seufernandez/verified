import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodSchema } from "zod";
import { validateSchema } from "../utils/validateSchema";

export const validateBody = (schema: ZodSchema): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = validateSchema(schema, req.body);
      next();
    } catch (error) {
      next(error);
    }
};
