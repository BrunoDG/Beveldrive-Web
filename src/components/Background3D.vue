<template>
    <div class="absolute inset-0" v-if="isClient">
        <TresCanvas shadows alpha>
            <template #default>
                <TresPerspectiveCamera :position="[0, 10, 0]" :look-at="[-10, -10, -10]" />
                <TresAmbientLight :intensity="0.4" color="#666666" />
                <TresDirectionalLight :position="[0, 0, 0]" :intensity="1.5" color="#9d0505" castShadow />
                <TresPointLight :position="[-10, 10, -10]" :intensity="400" color="#ff0000" :distance="1000"
                    :decay="1.5" />
                <TresPointLight :position="[-5, -5, -10]" :intensity="400" color="#ff0000" :distance="1000"
                    :decay="1.5" />
                <TresPointLight :position="[0, 20, 0]" :intensity="400" color="#ff0000" :distance="1000"
                    :decay="1.5" />
                <Suspense>
                    <WaveGrid />
                    <template #fallback>
                        <div class="text-white">Carregando...</div>
                    </template>
                </Suspense>
            </template>
        </TresCanvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TresCanvas } from "@tresjs/core";
import WaveGrid from '@/components/scenes/WaveGrid.vue';

const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
});
</script> 