<template>
    <div class="group backdrop-blur-sm bg-zinc-900/50 rounded-lg overflow-hidden hover:bg-zinc-900 transition-all duration-300">
        <!-- Imagem -->
        <div class="aspect-video w-full">
            <img :src="project.image" :alt="$t(project.titleKey)" class="w-full h-full object-cover" />
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
                <a v-if="project.demoLink" 
                   :href="project.demoLink" 
                   target="_blank" 
                   class="text-gray-400 hover:text-white transition-colors">
                    <Globe class="w-5 h-5" />
                </a>
                <a v-if="project.githubLink" 
                   :href="project.githubLink" 
                   target="_blank" 
                   class="text-gray-400 hover:text-white transition-colors">
                    <GithubIcon class="w-5 h-5" />
                </a>
                <a v-if="project.itchioLink" 
                   :href="project.itchioLink" 
                   target="_blank" 
                   class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.754 1.375 3.187 3.13 3.187 1.754 0 3.13-1.433 3.13-3.187V4.95c0-1.754-1.376-3.188-3.13-3.188v1.576zm7.746 0c-1.755 0-3.13 1.434-3.13 3.188v1.03c0 1.754 1.375 3.187 3.13 3.187s3.13-1.433 3.13-3.187V4.95c0-1.754-1.375-3.188-3.13-3.188v1.576zm7.746 0c-1.754 0-3.13 1.434-3.13 3.188v1.03c0 1.754 1.376 3.187 3.13 3.187 1.755 0 3.13-1.433 3.13-3.187V4.95c0-1.754-1.375-3.188-3.13-3.188v1.576z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Globe, GithubIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import type { Project } from '@/data/projects';

const { t } = useI18n();

defineProps<{
    project: Project;
}>();
</script>