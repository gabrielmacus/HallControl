import express = require("express");
import usePresetServices from './preset.services';
import presets from './preset.data';

interface PresetController {
    activatePreset: (req: express.Request<{ presetName: string, presetTag:string }, {}, {}>, res: express.Response) => any
    read: (req: express.Request, res: express.Response) => any 
}

const usePresetController = (): PresetController => {
    const presetServices = usePresetServices();

    return {
        activatePreset: async (req, res) => {
            if (!await presetServices.activatePreset(req.params.presetName, req.params.presetTag)) {
                return res.sendStatus(404);
            }
            return res.sendStatus(200);
        },
        read: (req, res: express.Response) => {
            return res.json(presets);
        }
    }
};


export default usePresetController;