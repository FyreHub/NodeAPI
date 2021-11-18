import { NextFunction, Request, Response } from 'express';

export const api = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).render('api');
    next();
};