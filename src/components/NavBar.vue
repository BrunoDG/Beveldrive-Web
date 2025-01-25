<template>
    <nav class="fixed w-full z-50 px-2 py-2">
        <div class="container mx-auto flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="flex items-start">
                <img src="/logotipo.png" alt="Bevel Drive" class="h-12" />
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="#sobre" class="text-white hover:text-red-500 transition-colors">
                    Sobre
                </a>
                <a href="#servicos" class="text-white hover:text-red-500 transition-colors">
                    Serviços
                </a>
                <a href="#portfolio" class="text-white hover:text-red-500 transition-colors">
                    Portfólio
                </a>
                <a href="#contato" class="text-white hover:text-red-500 transition-colors">
                    Contato
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button 
                class="md:hidden text-white"
                @click="menuOpen = !menuOpen"
                aria-label="Toggle Menu"
            >
                <svg 
                    class="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        v-if="!menuOpen"
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path 
                        v-else
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div 
            v-if="menuOpen" 
            class="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm"
        >
            <div class="container mx-auto py-4 px-4 flex flex-col space-y-4">
                <a 
                    v-for="item in menuItems" 
                    :key="item.href"
                    :href="item.href"
                    class="text-white hover:text-red-500 transition-colors"
                    @click="menuOpen = false"
                >
                    {{ item.text }}
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const menuItems = [
    { href: '#sobre', text: 'Sobre' },
    { href: '#servicos', text: 'Serviços' },
    { href: '#portfolio', text: 'Portfólio' },
    { href: '#contato', text: 'Contato' }
];
</script>

<style scoped>
nav {
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%);
    backdrop-filter: blur(5px);
}
</style>
