<template>
    <section class="relative flex min-h-screen bg-black bg-opacity-30">
        <!-- Texto da Hero -->
        <div class="relative z-10 text-white w-1/2 flex flex-col justify-center p-8">
            <h1 class="text-5xl font-bold text-start">Bem-vindo ao Futuro</h1>
            <p class="mt-4 text-xl text-gray-300 text-start">
                Experimente uma nova dimensão de inovação. Descubra nosso trabalho e conecte-se.
            </p>
            <div class="mt-6 flex justify-start">
                <Button
                    class="bg-red-600 hover:bg-red-700 w-60 h-10 text-white p-6 rounded-md">
                    Saiba Mais
                </Button>
            </div>
        </div>
        <!-- Canvas do TresJS -->
        <div class="absolute inset-0 -z-10">
            <TresCanvas clear-color="#82DBC5">
                <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
                <TresMesh>
                    <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
                    <TresMeshBasicMaterial color="orange" />
                </TresMesh>
                <TresAmbientLight :intensity="1" />
            </TresCanvas>
        </div>
    </section>
</template>

<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import * as THREE from 'three';
import { Button } from "@/components/ui/button";

const scene = new THREE.Scene();

const geometry = new THREE.TorusGeometry(1, 0.5, 16, 32);
const material = new THREE.MeshBasicMaterial({ color: 'orange' });
const donut = new THREE.Mesh(geometry, material);

scene.add(donut);

</script>

<style scoped>
/* Garantir que o Canvas ocupe toda a tela */
section {
    overflow: hidden;
}
</style>
