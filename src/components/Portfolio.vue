<template>
    <section class="min-h-screen py-20 px-4" id="portfolio">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">Portfólio</h2>

            <!-- Filtros de Categoria -->
            <div class="flex flex-wrap gap-4 mb-8">
                <button 
                    v-for="category in categories" 
                    :key="category"
                    @click="selectedCategory = category"
                    :class="[
                        'px-4 py-2 rounded-lg transition-colors backdrop-blur-sm',
                        selectedCategory === category 
                            ? 'bg-[#9d0505] text-white' 
                            : 'bg-zinc-800/30 text-gray-300 hover:bg-zinc-700/40'
                    ]"
                >
                    {{ category }}
                </button>
            </div>
            
            <!-- Grid de Cards -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard 
                    v-for="project in filteredProjects" 
                    :key="project.id"
                    :project="project"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PortfolioCard from './PortfolioCard.vue';
import { projects } from '@/data/projects';

const categories = ['Todos', 'Jogos', 'Web Apps']; //, 'Mobile Apps'];
const selectedCategory = ref('Todos');

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'Todos') {
        return projects;
    }
    return projects.filter(project => project.category === selectedCategory.value);
});
</script> 