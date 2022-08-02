import { VoiceMeeter } from "ts-easy-voicemeeter-remote/dist/index";

const voicemeeter = new VoiceMeeter();



export default () => {



    const muteStrip = async (stripIndex: number) => {
        await voicemeeter.init();
        voicemeeter.login();
        voicemeeter.setStripParameter("mute",stripIndex, 1);

    };

    const unmuteStrip = async (stripIndex: number) => {
        voicemeeter.login();
        voicemeeter.setStripParameter("mute", stripIndex, 0);

    };

    return {
        muteStrip,
        unmuteStrip
    };

}