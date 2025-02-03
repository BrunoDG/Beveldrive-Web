import BubbleBobbleImage from "@/assets/images/portfolio/BubbleBobbleClone.png";
import ShmupImage from "@/assets/images/portfolio/SampleShmupMechanics.png";
import NiivueImage from "@/assets/images/portfolio/NiivueReader_Pic01.png";
import RayMarchingImage from "@/assets/images/portfolio/Raymarching_sample_capture.png";
import AdminMedJogosImage from "@/assets/images/portfolio/Admin_Medjogos.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    itchioLink?: string;
    demoLink?: string;
    githubLink?: string;
    releaseDate: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Bubble Bobble Clone",
        description: "Jogo de plataforma clássico desenvolvido com Godot",
        category: "Jogos",
        image: BubbleBobbleImage,
        itchioLink:
            "https://beveldrive.itch.io/sample-mechanics-bubble-bobble-clone",
        releaseDate: "Dez 2023",
        technologies: ["Godot", "GDScript"],
    },
    {
        id: 2,
        title: "Shmup Mechanics",
        description:
            "Jogo de naves do estilo shmup (Shoot `em up) desenvolvido com Godot",
        category: "Jogos",
        image: ShmupImage,
        itchioLink: "https://beveldrive.itch.io/sample-shmup-mechanics",
        releaseDate: "Aug 2022",
        technologies: ["Godot", "GDScript"],
    },
    {
        id: 3,
        title: "NiivueReader",
        description:
            "Aplicação que efetua a leitura de imagens de tomografia computadorizada e converte para formato 3D",
        category: "Web Apps",
        image: NiivueImage,
        demoLink: "https://github.com/BrunoDG/NiiVueReader",
        githubLink: "https://github.com/BrunoDG/NiiVueReader",
        releaseDate: "Jan 2025",
        technologies: [
            "Vue.js",
            "TypeScript",
            "Tailwind",
            "Niivue",
            "Python",
            "FastAPI",
        ],
    },
    {
        id: 4,
        title: "RayMarching Sample",
        description:
            "Aplicação demonstrativa do uso de RayMarching para renderização de objetos 3D",
        category: "Web Apps",
        image: RayMarchingImage,
        itchioLink: "https://beveldrive.itch.io/raymarching-sample",
        githubLink: "https://github.com/BrunoDG/",
        releaseDate: "Sep 2017",
        technologies: ["JavaScript", "Three.js"],
    },
/*    {
        id: 5,
        title: "Admin MedJogos",
        description:
            "Painel de administração para o serviço MedJogos",
        category: "Web Apps",
        image: AdminMedJogosImage,
        demoLink: "https://admin.medjogos.com",
        releaseDate: "Jan 2025",
        technologies: [
            "Vue.js",
            "TypeScript",
            "Tailwind",
            "Express.js",
            "MongoDB",
        ],
    },*/
    // ... outros projetos

];
