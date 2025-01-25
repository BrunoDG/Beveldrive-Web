<template>
    <section class="min-h-screen bg-black py-20 px-4" id="sobre">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">Sobre Nós</h2>

            <div class="grid md:grid-cols-2 gap-10">
                <div class="text-gray-300 space-y-6">
                    <p class="text-lg">
                        A Bevel Drive nasceu da paixão por tecnologia e inovação. Nossa missão é transformar ideias em
                        experiências digitais únicas.
                    </p>
                    <p class="text-lg">
                        Com uma equipe especializada em desenvolvimento e design, criamos soluções que combinam
                        tecnologia de ponta com criatividade.
                    </p>
                    
                </div>

                <div class="bg-[#9d0505] p-8 rounded-lg">
                    <h3 class="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
                    <ul class="text-white space-y-4">
                        <li class="flex items-center gap-2">
                            <CheckCircle class="w-5 h-5" />
                            Inovação Constante
                        </li>
                        <li class="flex items-center gap-2">
                            <CheckCircle class="w-5 h-5" />
                            Excelência Técnica
                        </li>
                        <li class="flex items-center gap-2">
                            <CheckCircle class="w-5 h-5" />
                            Compromisso com Resultados
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Slider de Clientes -->
            <div class="mt-20">
                <h3 class="text-2xl font-bold text-white mb-10 text-center">Clientes que confiaram em nosso trabalho</h3>
                
                <div class="relative overflow-hidden">
                    <!-- Gradiente de fade nas bordas -->
                    <div class="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent"></div>
                    <div class="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent"></div>
                    
                    <!-- Primeira fileira de logos -->
                    <div class="flex animate-scroll">
                        <div class="flex items-center gap-16 px-8">
                            <img v-for="(client, index) in clients" 
                                 :key="`client-1-${index}`"
                                 :src="client.logo" 
                                 :alt="client.name"
                                 class="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <!-- Duplicata para scroll infinito -->
                        <div class="flex items-center gap-16 px-8">
                            <img v-for="(client, index) in clients" 
                                 :key="`client-2-${index}`"
                                 :src="client.logo" 
                                 :alt="client.name"
                                 class="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next';

const clients = [
    {
        name: 'FS Studio',
        logo: 'https://fsstudio.com/wp-content/themes/fs-studio/assets/img/svg/logo.svg'
    },
    {
        name: 'MedGrupo',
        logo: '@/assets/images/clients/Medgrupo_Logo.png'
    },
    {
        //name: '',
        //logo: 'https://'
    },
    // Adicione mais clientes aqui
];
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>