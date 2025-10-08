import BubbleBobbleImage from "@/assets/images/portfolio/BubbleBobbleClone.png";
import ShmupImage from "@/assets/images/portfolio/SampleShmupMechanics.png";
import NiivueImage from "@/assets/images/portfolio/NiivueReader_Pic01.png";
import RayMarchingImage from "@/assets/images/portfolio/Raymarching_sample_capture.png";
import DemoSceneBrasilImage from "@/assets/images/portfolio/DemoScene_Brasil.png";

export interface Project {
    id: number;
    titleKey: string;
    descriptionKey: string;
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
    titleKey: "portfolio.projects.game1.title",
    descriptionKey: "portfolio.projects.game1.description",
    category: "games",
    image: BubbleBobbleImage,
    itchioLink:
      "https://beveldrive.itch.io/sample-mechanics-bubble-bobble-clone",
    releaseDate: "Dez 2023",
    technologies: ["Godot", "GDScript", "Pixel Art"],
  },
  {
    id: 2,
    titleKey: "portfolio.projects.game2.title",
    descriptionKey: "portfolio.projects.game2.description",
    category: "games",
    image: ShmupImage,
    itchioLink: "https://beveldrive.itch.io/sample-shmup-mechanics",
    releaseDate: "Aug 2022",
    technologies: ["Godot", "GDScript"],
  },
  {
    id: 3,
    titleKey: "portfolio.projects.web1.title",
    descriptionKey: "portfolio.projects.web1.description",
    category: "webapps",
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
    titleKey: "portfolio.projects.web2.title",
    descriptionKey: "portfolio.projects.web2.description",
    category: "webapps",
    image: RayMarchingImage,
    itchioLink: "https://beveldrive.itch.io/raymarching-sample",
    githubLink: "https://github.com/BrunoDG/",
    releaseDate: "Sep 2017",
    technologies: ["JavaScript", "Three.js"],
  },
  {
    id: 5,
    titleKey: "portfolio.projects.web3.title",
    descriptionKey: "portfolio.projects.web3.description",
    category: "webapps",
    image: DemoSceneBrasilImage,
    demoLink: "https://demoscenebrasil.beveldrive.com.br",
    releaseDate: "May 2025",
    technologies: ["Vue.js", "TypeScript", "Tailwind"],
  },
  // ... outros projetos
];
