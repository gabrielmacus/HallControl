interface Preset {
    name: string
    config: {
        unmuted_strips: number[]
        muted_strips: number[]
        obs_scene?: string
        cmd?:string
    },
    tag: string
}

const data: Preset[] = [
    {
        name: "Atril",
        config: {
            unmuted_strips: [0],
            muted_strips: [1, 2, 3, 5, 6, 7],
            obs_scene:"Atril"
        },
        tag:"Plataforma"
    },
    {
        name: "Izquierda",
        config: {
            unmuted_strips: [1],
            muted_strips: [0, 2, 3, 5, 6, 7],
            obs_scene: "Izquierda"
        },
        tag: "Plataforma"
    },
    {
        name: "Derecha",
        config: {
            unmuted_strips: [2],
            muted_strips: [0, 1, 3, 5, 6, 7],
            obs_scene:"Derecha"
        },
        tag: "Plataforma"
    },
    {
        name: "Auditorio",
        config: {
            unmuted_strips: [3],
            muted_strips: []
        },
        tag: "Comentarios"
    },
    {
        name: "Zoom",
        config: {
            unmuted_strips: [6],
            muted_strips: [0, 1, 2, 3, 5, 7]
        },
        tag: "Comentarios"
    },
    {
        name: "LSA",
        config: {
            unmuted_strips: [],
            muted_strips: [],
            obs_scene: "LSA"
        },
        tag: "Comentarios"
    },
    {
        name: "JW Library (imagen)",
        config: {
            unmuted_strips: [],
            muted_strips: [],
            obs_scene: "Pantalla",
            cmd: "nircmd win activate ititle \"JW Library\""
        },
        tag: "Pantalla"
    },
    {
        name: "VLC (imagen)",
        config: {
            unmuted_strips: [],
            muted_strips: [],
            obs_scene: "Pantalla",
            cmd: "nircmd win activate ititle \"VLC\""
        },
        tag: "Pantalla"
    },
    {
        name: "JW Library (video)",
        config: {
            unmuted_strips: [5],
            muted_strips: [0, 1, 2, 3, 5, 6, 7],
            obs_scene: "Pantalla",
            cmd: "nircmd win activate ititle \"JW Library\""
        },
        tag: "Pantalla"
    },
    {
        name: "VLC (video)",
        config: {
            unmuted_strips: [5],
            muted_strips: [0, 1, 2, 3, 5, 6, 7],
            obs_scene: "Pantalla",
            cmd: "nircmd win activate ititle \"VLC\""
        },
        tag: "Pantalla"
    },
    {
        name: "Cámara",
        config: {
            unmuted_strips: [],
            muted_strips: [],
            cmd: "nircmd win activate ititle \"Projector\""
        },
        tag: "Pantalla"
    },
    {
        name: "Zoom",
        config: {
            unmuted_strips: [6],
            muted_strips: [0, 1, 2, 3, 4, 5, 7],
            obs_scene: "Pantalla"
        },
        tag: "Pantalla"
    },

]

export default data;