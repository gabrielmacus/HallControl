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
const preset_services_1 = require("./preset.services");
const preset_data_1 = require("./preset.data");
const usePresetController = () => {
    const presetServices = (0, preset_services_1.default)();
    return {
        activatePreset: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            if (!(yield presetServices.activatePreset(req.params.presetName, req.params.presetTag))) {
                return res.sendStatus(404);
            }
            return res.sendStatus(200);
        }),
        read: (req, res) => {
            return res.json(preset_data_1.default);
        }
    };
};
exports.default = usePresetController;
//# sourceMappingURL=preset.controller.js.map