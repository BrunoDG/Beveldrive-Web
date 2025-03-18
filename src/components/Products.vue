<template>
    <section class="min-h-screen py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">{{ $t('products.title') }}</h2>

            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="product in products" :key="product.id"
                    class="backdrop-blur-sm bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900 transition-all duration-300">
                    <div class="text-[#9d0505] mb-4">
                        <component :is="product.icon" class="w-10 h-10" />
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">{{ $t(product.titleKey) }}</h3>
                    <p class="text-gray-300">{{ $t(product.descriptionKey) }}</p>
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
        titleKey: 'products.web.title',
        descriptionKey: 'products.web.description'
    },
    {
        id: 2,
        icon: Gamepad2,
        titleKey: 'products.games.title',
        descriptionKey: 'products.games.description'
    }
];
</script>