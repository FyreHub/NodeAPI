import { Request, Response } from 'express';
import { drive } from 'node-os-utils';

export const disk = async (req: Request, res: Response) => {
    const data = await drive.info('');
    function getuseddisk() {
        let unparsed = data.usedGb.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    function getfreedisk() {
        let unparsed = data.freeGb.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    function gettotaldisk() {
        let unparsed = data.freeGb.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    function getusedpercent() {
        let unparsed = data.usedPercentage.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    function getfreepercent() {
        let unparsed = data.freePercentage.toString();
        return parseInt(unparsed.slice(0, unparsed.indexOf('.')));
    };
    res.status(200).json({
        free: `${getfreedisk().toString()} GB`,
        used: `${getuseddisk().toString()} GB`,
        total: `${gettotaldisk().toString()} GB`,
        freepercent: `${getfreepercent().toString()}%`,
        usedpercent: `${getusedpercent().toString()}%`,
        raw: {
            free: getfreedisk(),
            used: getuseddisk(),
            total: gettotaldisk(),
            freepercent: getfreepercent(),
            usedpercent: getusedpercent()
        }
    });
};