import data from './preset.data';
import useVoicemeeterServices from '../voicemeeter/voicemeeter.services';
import useObsServices from '../obs/obs.services';
const child_process = require('child_process');
//const cmd = require('node-cmd');

export default () => {
    const voicemeeterServices = useVoicemeeterServices();
    const obsServices = useObsServices();

    return {
        activatePreset: async (presetName: string, presetTag: string) => {
            const presetIndex = data.findIndex(p => p.name == presetName && p.tag == presetTag);
            if (presetIndex == -1) {
                return false;
            }
            const preset = data[presetIndex];

            
            for (const muted_strip of preset.config.muted_strips) {
                await voicemeeterServices.muteStrip(muted_strip);
            }

            for (const unmuted_strip of preset.config.unmuted_strips) {
                await voicemeeterServices.unmuteStrip(unmuted_strip);
            }

            if (preset.config.obs_scene)
                obsServices.setCurrentScene(preset.config.obs_scene!);

            if (preset.config.cmd)
                child_process.execSync(preset.config.cmd);
            //cmd.runSync(preset.config.cmd);

            return true;
        }
    }
}