import { Request, Response } from 'express';
import { drive } from 'node-os-utils';

export const disk = async (req: Request, res: Response) => {
    const data = await drive.info('');
    console.log(data);
};