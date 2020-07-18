import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { register } from './routs'
import express, { Request, Response, NextFunction } from 'express';

export const createApp = (store: Store) => {
  const app = express()

  app.use(express.json())

  app.use(
    session({
      ...SESSION_OPTIONS,
      store
    })
  )

  app.use(register)

  app.use(function (req, res, next) {
    console.error(req.body);
    res.json({ message: 'Not Found' });
  });

  app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" })
  });

  app.get('/', (req, res) => res.json({ message: 'OKi-Doki' }))



  return app
}