import express = require("express");
import usePresetController from "./preset.controller";

const usePresetRouter = () => {

    const router = express.Router();
    const controller = usePresetController();

    router.post("/presets/:presetName-:presetTag/activate", controller.activatePreset);
    router.get("/presets", controller.read);

    return router;

};

export default usePresetRouter;