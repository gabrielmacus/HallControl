import { useState } from 'react';
import axios from 'axios';

export interface Preset {
    name: string,
    tag:string
}

const useMeetingControlAPI = () => {
    const axiosInstance = axios.create({
        baseURL:process.env.REACT_APP_API_URL
    });


    return {

        setObsScene: async (sceneName: string) => {
            //await axiosInstance.post(`/presets/${sceneName}/activate`);
        },
        setPreset: async (preset: Preset) => {
            await axiosInstance.post(`/presets/${preset.name}-${preset.tag}/activate`);
        },
        read: async () => {
            return (await axiosInstance.get<Preset[]>(`/presets`)).data;
        }
    };
};

export default useMeetingControlAPI;