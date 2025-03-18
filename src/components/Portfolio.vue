<template>
    <section class="min-h-screen py-20 px-4" id="portfolio">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">{{ $t('portfolio.title') }}</h2>

            <!-- Filtros de Categoria -->
            <div class="flex flex-wrap gap-4 mb-8">
                <button 
                    v-for="category in categories" 
                    :key="category.id"
                    @click="selectedCategory = category.id"
                    :class="[
                        'px-4 py-2 rounded-lg transition-colors backdrop-blur-sm',
                        selectedCategory === category.id 
                            ? 'bg-[#9d0505] text-white' 
                            : 'bg-zinc-800/30 text-gray-300 hover:bg-zinc-700/40'
                    ]"
                >
                    {{ $t(category.translationKey) }}
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
import { useI18n } from 'vue-i18n';
import PortfolioCard from './PortfolioCard.vue';
import { projects } from '@/data/projects';

const { t } = useI18n();

interface Category {
    id: string;
    translationKey: string;
}

const categories: Category[] = [
    { id: 'all', translationKey: 'portfolio.categories.all' },
    { id: 'games', translationKey: 'portfolio.categories.games' },
    { id: 'webapps', translationKey: 'portfolio.categories.webapps' }
];

const selectedCategory = ref('all');

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return projects;
    }
    return projects.filter(project => project.category === selectedCategory.value);
});
</script> 