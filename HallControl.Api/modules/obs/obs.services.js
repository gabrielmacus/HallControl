"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const cmd = require('node-cmd');
const child_process = require('child_process');
exports.default = () => {
    return {
        getCurrentScene: () => {
            return child_process.execSync(`${process.env.OBS_CLI_PATH} scene get`).regex(/\A.*/)[0];
        },
        setCurrentScene: (scene) => {
            try {
                child_process.execSync(`${process.env.OBS_CLI_PATH} scene current ${scene}`).toString();
                return true;
            }
            catch (error) {
                return false;
            }
        }
    };
};
//# sourceMappingURL=obs.services.js.map