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
const index_1 = require("ts-easy-voicemeeter-remote/dist/index");
const voicemeeter = new index_1.VoiceMeeter();
exports.default = () => {
    const muteStrip = (stripIndex) => __awaiter(void 0, void 0, void 0, function* () {
        yield voicemeeter.init();
        voicemeeter.login();
        voicemeeter.setStripParameter("mute", stripIndex, 1);
    });
    const unmuteStrip = (stripIndex) => __awaiter(void 0, void 0, void 0, function* () {
        voicemeeter.login();
        voicemeeter.setStripParameter("mute", stripIndex, 0);
    });
    return {
        muteStrip,
        unmuteStrip
    };
};
//# sourceMappingURL=voicemeeter.services.js.map