<template>
    <nav class="fixed top-0 left-0 right-0 z-9999 backdrop-blur-md bg-gradient-to-b from-black/80 to-black/40 border-b border-white/10">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="/" class="flex items-start">
                    <img src="@/assets/images/Logotipo.png" alt="Bevel Drive" class="h-12" />
                </a>

                <!-- Menu Desktop -->
                <div class="hidden md:flex items-center space-x-8">
                    <a 
                        v-for="item in menuItems" 
                        :key="item.id"
                        :href="item.path"
                        class="text-gray-300 hover:text-white transition-colors"
                    >
                        {{ $t(item.titleKey) }}
                    </a>
                    <LanguageSelector />
                </div>

                <!-- Botão Menu Mobile -->
                <button 
                    @click="menuOpen = !menuOpen"
                    class="md:hidden text-gray-300 hover:text-white"
                >
                    <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
                </button>
            </div>

            <!-- Menu Mobile -->
            <div 
                v-if="menuOpen" 
                class="md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10"
            >
                <div class="container mx-auto px-4 py-4 space-y-4">
                    <a 
                        v-for="item in menuItems" 
                        :key="item.id"
                        :href="item.path"
                        class="block text-gray-300 hover:text-white transition-colors"
                        @click="menuOpen = false"
                    >
                        {{ $t(item.titleKey) }}
                    </a>
                    <LanguageSelector />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSelector from './LanguageSelector.vue';

const { t } = useI18n();
const menuOpen = ref(false);

interface MenuItem {
    id: string;
    titleKey: string;
    path: string;
}

const menuItems = computed<MenuItem[]>(() => [
    { id: 'about', titleKey: 'nav.about', path: '/#sobre' },
    { id: 'services', titleKey: 'nav.services', path: '/#servicos' },
    { id: 'portfolio', titleKey: 'nav.portfolio', path: '/#portfolio' },
    { id: 'team', titleKey: 'nav.team', path: '/#equipe' },
    { id: 'contact', titleKey: 'nav.contact', path: '/#contato' }
]);
</script>

<style scoped>
/* Removendo o estilo específico do router-link */
</style>
