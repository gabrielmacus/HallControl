"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const preset_data_1 = require("./preset.data");
const voicemeeter_services_1 = require("../voicemeeter/voicemeeter.services");
const obs_services_1 = require("../obs/obs.services");
const child_process = require('child_process');
//const cmd = require('node-cmd');
exports.default = () => {
    const voicemeeterServices = (0, voicemeeter_services_1.default)();
    const obsServices = (0, obs_services_1.default)();
    return {
        activatePreset: (presetName, presetTag) => __awaiter(void 0, void 0, void 0, function* () {
            const presetIndex = preset_data_1.default.findIndex(p => p.name == presetName && p.tag == presetTag);
            if (presetIndex == -1) {
                return false;
            }
            const preset = preset_data_1.default[presetIndex];
            for (const muted_strip of preset.config.muted_strips) {
                yield voicemeeterServices.muteStrip(muted_strip);
            }
            for (const unmuted_strip of preset.config.unmuted_strips) {
                yield voicemeeterServices.unmuteStrip(unmuted_strip);
            }
            if (preset.config.obs_scene)
                obsServices.setCurrentScene(preset.config.obs_scene);
            if (preset.config.cmd)
                child_process.execSync(preset.config.cmd, {
                    windowsHide: true
                });
            //cmd.runSync(preset.config.cmd);
            return true;
        })
    };
};
//# sourceMappingURL=preset.services.js.map