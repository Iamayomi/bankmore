import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger/logger";
import Joi from "joi";

// Middleware for validation
export const validateRequest =
  (schema: Joi.ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void>  => {
    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (err: any) {
      logger.error(err);
      res.status(400).json(err.details[0].message);
    }
  };