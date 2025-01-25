<template>
    <section class="min-h-screen bg-black py-20 px-4" id="portfolio">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">Portfólio</h2>

            <!-- Filtros de Categoria -->
            <div class="flex flex-wrap gap-4 mb-8">
                <button 
                    v-for="category in categories" 
                    :key="category"
                    @click="selectedCategory = category"
                    :class="[
                        'px-4 py-2 rounded-lg transition-colors',
                        selectedCategory === category 
                            ? 'bg-[#9d0505] text-white' 
                            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                    ]"
                >
                    {{ category }}
                </button>
            </div>
            
            <!-- Grid de Cards -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in filteredProjects" 
                     :key="project.id" 
                     class="bg-zinc-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-[#9d0505]/20 transition-all duration-300">
                    
                    <!-- Imagem com Overlay -->
                    <div class="relative overflow-hidden">
                        <img :src="project.image" :alt="project.title" 
                             class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-4 left-4 right-4">
                                <div class="flex gap-2 flex-wrap">
                                    <span v-for="tech in project.technologies" 
                                          :key="tech"
                                          class="px-2 py-1 text-xs bg-[#9d0505] text-white rounded">
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Conteúdo do Card -->
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
                            <span class="text-sm text-gray-400">{{ project.releaseDate }}</span>
                        </div>
                        
                        <p class="text-gray-400 mb-4">{{ project.description }}</p>
                        
                        <!-- Links -->
                        <div class="space-y-3">
                            <a v-if="project.itchioLink" 
                               :href="project.itchioLink" 
                               target="_blank"
                               class="flex items-center gap-2 text-white bg-[#fa5c5c] hover:bg-[#ff4444] px-4 py-2 rounded-lg transition-colors">
                                <GamepadIcon class="w-5 h-5" />
                                Jogar no itch.io
                            </a>
                            
                            <a v-if="project.demoLink" 
                               :href="project.demoLink" 
                               target="_blank"
                               class="flex items-center gap-2 text-white bg-[#9d0505] hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                                <ExternalLink class="w-5 h-5" />
                                Ver Demo
                            </a>
                            
                            <a v-if="project.githubLink" 
                               :href="project.githubLink" 
                               target="_blank"
                               class="flex items-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors">
                                <Github class="w-5 h-5" />
                                Código Fonte
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { GamepadIcon, ExternalLink, Github } from 'lucide-vue-next';
import BubbleBobbleImage from '@/assets/images/portfolio/BubbleBobbleClone.png'
import ShmupImage from '@/assets/images/portfolio/SampleShmupMechanics.png'
import NiivueImage from '@/assets/images/portfolio/NiivueReader_Pic01.png'
import RayMarchingImage from '@/assets/images/portfolio/Raymarching_sample_capture.png'

const categories = ['Todos', 'Jogos', 'Web Apps']; //, 'Mobile Apps'];
const selectedCategory = ref('Todos');

const projects = [
    {
        id: 1,
        title: 'Bubble Bobble Clone',
        description: 'Jogo de plataforma clássico desenvolvido com Godot',
        category: 'Jogos',
        image: BubbleBobbleImage,
        itchioLink: 'https://beveldrive.itch.io/sample-mechanics-bubble-bobble-clone',
        //githubLink: 'https://github.com/username/game1',
        releaseDate: 'Dez 2023',
        technologies: ['Godot', 'GDScript']
    },
    {
        id: 2,
        title: 'Shmup Mechanics',
        description: 'Jogo de naves do estilo shmup (Shoot `em up) desenvolvido com Godot',
        category: 'Jogos',
        image: ShmupImage,
        itchioLink: 'https://beveldrive.itch.io/sample-shmup-mechanics',
        //githubLink: 'https://github.com/username/game1',
        releaseDate: 'Aug 2022',
        technologies: ['Godot', 'GDScript']
    },
    {
        id: 3,
        title: 'NiivueReader',
        description: 'Aplicação que efetua a leitura de imagens de tomografia computadorizada e converte para formato 3D',
        category: 'Web Apps',
        image: NiivueImage,
        demoLink: 'https://github.com/BrunoDG/NiiVueReader',
        githubLink: 'https://github.com/BrunoDG/NiiVueReader',
        releaseDate: 'Jan 2025',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind', 'Niivue', 'Python', 'FastAPI']
    },
    {
        id: 4,
        title: 'RayMarching Sample',
        description: 'Aplicação demonstrativa do uso de RayMarching para renderização de objetos 3D',
        category: 'Web Apps',
        image: RayMarchingImage,
        itchioLink: 'https://beveldrive.itch.io/raymarching-sample',
        githubLink: 'https://github.com/BrunoDG/',
        releaseDate: 'Sep 2017',
        technologies: ['JavaScript', 'Three.js']
    },
    // Adicione mais projetos aqui
];

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'Todos') {
        return projects;
    }
    return projects.filter(project => project.category === selectedCategory.value);
});
</script> 