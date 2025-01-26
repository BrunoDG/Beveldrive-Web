<template>
    <div
        class="backdrop-blur-sm bg-zinc-900/30 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-[#9d0505]/20 transition-all duration-300">
        <!-- Imagem com Overlay -->
        <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex gap-2 flex-wrap">
                        <span v-for="tech in project.technologies" :key="tech"
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
                <a v-if="project.itchioLink" :href="project.itchioLink" target="_blank"
                    class="flex items-center gap-2 text-white bg-[#fa5c5c] hover:bg-[#ff4444] px-4 py-2 rounded-lg transition-colors">
                    <GamepadIcon class="w-5 h-5" />
                    Jogar no itch.io
                </a>

                <a v-if="project.demoLink" :href="project.demoLink" target="_blank"
                    class="flex items-center gap-2 text-white bg-[#9d0505] hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                    <ExternalLink class="w-5 h-5" />
                    Ver Demo
                </a>

                <a v-if="project.githubLink" :href="project.githubLink" target="_blank"
                    class="flex items-center gap-2 text-white bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-700/60 px-4 py-2 rounded-lg transition-colors">
                    <Github class="w-5 h-5" />
                    Código Fonte
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GamepadIcon, ExternalLink, Github } from 'lucide-vue-next';

interface Project {
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

defineProps<{
    project: Project;
}>();
</script>