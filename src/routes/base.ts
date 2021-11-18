import { NextFunction, Request, Response } from 'express';

export const base = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('base');
    next();
};