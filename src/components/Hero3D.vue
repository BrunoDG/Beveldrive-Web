<template>
    <section class="relative flex min-h-screen bg-black bg-opacity-30">
        <!-- Texto da Hero -->
        <div class="relative z-10 text-white w-1/2 flex flex-col justify-center p-8">
            <h1 class="text-5xl font-bold text-start">Bem-vindo ao futuro</h1>
            <p class="mt-4 text-xl text-gray-300 text-start">
                Experimente uma nova dimensão, com experiências imersivas e tecnologia de ponta. <br />
                Descubra mais sobre nosso trabalho e conecte-se.
            </p>
            <div class="mt-6 flex justify-start">
                <Button class="bg-[#9d0505] hover:bg-red-600 w-60 h-10 text-white p-6 rounded-md">
                    Saiba Mais
                </Button>
            </div>
        </div>
        <!-- Canvas do TresJS -->
        <div class="absolute inset-0" v-if="isClient">
            <TresCanvas shadows alpha>
                <template #default>
                    <TresPerspectiveCamera :position="[0, 10, 0]" :look-at="[-10, -10, -10]" />
                    <TresAmbientLight :intensity="0.4" color="#666666" />
                    <TresDirectionalLight :position="[0, 0, 0]" :intensity="1.5" color="#9d0505" castShadow />
                    <TresPointLight :position="[-10, 10, -10]" :intensity="400" color="#ff0000" :distance="1000" :decay="1.5" />
                    <TresPointLight :position="[-5, -5, -10]" :intensity="400" color="#ff0000" :distance="1000" :decay="1.5" />
                    <TresPointLight :position="[0, 20, 0]" :intensity="400" color="#ff0000" :distance="1000" :decay="1.5" />
                    <Suspense>
                        <WaveGrid />
                        <template #fallback>
                            <div class="text-white">Carregando...</div>
                        </template>
                    </Suspense>
                </template>
            </TresCanvas>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TresCanvas } from "@tresjs/core";
import { Button } from "@/components/ui/button";
import WaveGrid from '@/components/scenes/WaveGrid.vue';

const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
});
</script>
