<template>
    <section class="min-h-screen py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">Nossos Produtos</h2>

            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="product in products" :key="product.id"
                    class="backdrop-blur-sm bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition-all duration-300">
                    <div class="text-[#9d0505] mb-4">
                        <component :is="product.icon" class="w-10 h-10" />
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">{{ product.title }}</h3>
                    <p class="text-gray-300">{{ product.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Code, Gamepad2 } from 'lucide-vue-next';

const products = [
    {
        id: 1,
        icon: Code,
        title: 'Desenvolvimento Web',
        description: 'Criação de sites e aplicações web modernas e responsivas, utilizando tecnologias como Vue.js, Three.js, TailwindCSS, Python, FastAPI, PostgreSQL, dentre outros.'
    },
    {
        id: 2,
        icon: Gamepad2,
        title: 'Desenvolvimento de Jogos',
        description: 'Desenvolvimento de jogos para desktop e mobile, utilizando Godot, Unity, C#, GDScript, WebGL, WebGPU e Typescript.'
    }
];
</script>