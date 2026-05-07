import MedgrupoLogo from "@/assets/images/clients/Medgrupo_Logo.png";

export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [
  {
    name: "FS Studio",
    logo: "https://fsstudio.com/wp-content/uploads/2025/11/Logo-fs.webp",
  },
  {
    name: "MedGrupo",
    logo: MedgrupoLogo,
  },
  {
    name: "Instituto Tecgraf / PUC-Rio",
    logo: "https://www.tecgraf.puc-rio.br/images/svg/logo.svg",
  },
];
