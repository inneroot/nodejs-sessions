import { Request } from 'express'

export const isloggedIn = (req: Request) => !!req.session!.userId

export const login = (req: Request, userId: string) => {
  req.session!.userId = userId
}
