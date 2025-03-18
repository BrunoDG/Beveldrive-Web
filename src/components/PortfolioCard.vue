<template>
    <div class="group backdrop-blur-sm bg-zinc-900/50 rounded-lg overflow-hidden hover:bg-zinc-900 transition-all duration-300">
        <!-- Imagem -->
        <div class="aspect-video w-full">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
        </div>

        <!-- Conteúdo -->
        <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ $t(project.titleKey) }}</h3>
            <p class="text-gray-300 mb-4">{{ $t(project.descriptionKey) }}</p>
            
            <!-- Tecnologias -->
            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-2 py-1 bg-zinc-800 text-gray-300 text-sm rounded">
                    {{ tech }}
                </span>
            </div>

            <!-- Links -->
            <div class="flex gap-4">
                <a v-if="project.demo" 
                   :href="project.demo" 
                   target="_blank" 
                   class="text-gray-400 hover:text-white transition-colors">
                    <Globe class="w-5 h-5" />
                </a>
                <a v-if="project.github" 
                   :href="project.github" 
                   target="_blank" 
                   class="text-gray-400 hover:text-white transition-colors">
                    <GithubIcon class="w-5 h-5" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Globe, GithubIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Project {
    title: string | undefined;
    id: number;
    titleKey: string;
    descriptionKey: string;
    image: string;
    category: string;
    technologies: string[];
    demo?: string;
    github?: string;
}

defineProps<{
    project: Project;
}>();
</script>