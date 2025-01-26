import MedgrupoLogo from '@/assets/images/clients/Medgrupo_Logo.png'

export interface Client {
    name: string;
    logo: string;
}

export const clients: Client[] = [
    {
        name: 'FS Studio',
        logo: 'https://fsstudio.com/wp-content/themes/fs-studio/assets/img/svg/logo.svg'
    },
    {
        name: 'MedGrupo',
        logo: MedgrupoLogo
    }
]; 