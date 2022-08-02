"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const preset_controller_1 = require("./preset.controller");
const usePresetRouter = () => {
    const router = express.Router();
    const controller = (0, preset_controller_1.default)();
    router.post("/presets/:presetName-:presetTag/activate", controller.activatePreset);
    router.get("/presets", controller.read);
    return router;
};
exports.default = usePresetRouter;
//# sourceMappingURL=preset.router.js.map