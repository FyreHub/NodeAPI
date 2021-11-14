import { Request, Response } from 'express';
import { cpu as cpudata } from 'node-os-utils';

export const cpu = async (req: Request, res: Response) => {
    res.status(200);
    cpudata.free().then(async (cpufree: number) => {
        cpudata.usage().then(async (cpuusage: number) => {
            function getusedcpu() {
                let unparsed = cpuusage.toString();
                return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
            };
            function getfreecpu() {
                let unparsed = cpufree.toString();
                return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
            };
            function getcpucores() {
                return cpudata.count();
            };
            res.json({
                free: `${getfreecpu().toString()}%`,
                used: `${getusedcpu().toString()}%`,
                cores: `${getcpucores().toString()} Cores`,
                raw: {
                    free: getfreecpu(),
                    used: getusedcpu(),
                    cores: getcpucores()
                }
            });
        });
    });
};