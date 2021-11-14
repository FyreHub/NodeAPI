import { Request, Response } from 'express';
import { mem } from 'node-os-utils';

export const memory = async (req: Request, res: Response) => {
    const data = await mem.info()
    function getusedmem() {
        let unparsed = data.usedMemMb.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    function getfreemem() {
        let unparsed = data.freeMemMb.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    function gettotalmem() {
        return data.totalMemMb;
    };
    res.status(200).json({
        free: `${getfreemem().toString()} MB`,
        used: `${getusedmem().toString()} MB`,
        total: `${gettotalmem().toString()} MB`,
        raw: {
            free: getfreemem(),
            total: gettotalmem(),
            used: getusedmem()
        }
    });
};