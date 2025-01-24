<template>
    <section class="relative flex min-h-screen bg-black bg-opacity-30">
        <!-- Texto da Hero -->
        <!-- <div class="relative z-10 text-white w-1/2 flex flex-col justify-center p-8">
            <h1 class="text-5xl font-bold text-start">Bem-vindo ao Futuro</h1>
            <p class="mt-4 text-xl text-gray-300 text-start">
                Experimente uma nova dimensão de inovação. Descubra nosso trabalho e conecte-se.
            </p>
            <div class="mt-6 flex justify-start">
                <Button class="bg-[#9d0505] hover:bg-red-600 w-60 h-10 text-white p-6 rounded-md">
                    Saiba Mais
                </Button>
            </div>
        </div> -->
        <!-- Canvas do TresJS -->
        <div class="absolute inset-0">
            <TresCanvas shadows alpha>
                <!-- Câmera -->
                <TresPerspectiveCamera makeDefault :position="[80, 50, 0]" :look-at="[0, 0, 0]" />

                <!-- Luzes -->
                <TresAmbientLight :intensity="0.8" color="#9d0c0c"/>
                <TresDirectionalLight :position="[10, 100, 20]" :intensity="1.5" color="#000000" />
                <!-- Onda de Cubos -->
                <Suspense>
                    <WaveGrid />
                </Suspense>
            </TresCanvas>
        </div>
    </section>
</template>

<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { Button } from "@/components/ui/button";
import WaveGrid from '@/components/scenes/WaveGrid.vue';

</script>
