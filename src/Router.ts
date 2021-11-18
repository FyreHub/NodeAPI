import { NextFunction, Request, Response, Router } from 'express';
import { grey, bold, green, white } from 'chalk';
import { base, api, memory, cpu, disk } from './Routes';

export default (router: Router) => {
    router.get('/', async (req: Request, res: Response, next: NextFunction) => base(req, res, next));
    router.get('/api', async (req: Request, res: Response, next: NextFunction) => api(req, res, next));
    router.get('/api/memory', async (req: Request, res: Response, next: NextFunction) => memory(req, res));
    router.get('/api/cpu', async (req: Request, res: Response, next: NextFunction) => cpu(req, res));
    router.get('/api/disk', async (req: Request, res: Response, next: NextFunction) => disk(req, res));
    console.log(`${grey(bold('['))}${green(bold('ROUTER'))}${grey(bold(']'))} ${white('Successfully registered all routes.')}`)
}