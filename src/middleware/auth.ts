import { Request, Response, NextFunction } from "express";
import { isloggedIn } from '../auth'

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isloggedIn(req)) {
    return next(new Error('You are already logged in'))
  }

  next()
}
