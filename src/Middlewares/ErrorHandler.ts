import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(404).json({ message: error.message });
    next();
  }
}
