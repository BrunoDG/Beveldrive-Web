<template>
    <TresMesh v-for="(cube, index) in cubes" :key="index" :position="cube.position" castShadow receiveShadow>
        <TresBoxGeometry :args="[.5, .5, .5]" />
        <TresMeshPhysicalMaterial color="#9c9c9c" :metalness="0.5" :roughness="0.5" />
    </TresMesh>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import * as T from 'three';
import { useRenderLoop } from '@tresjs/core';

const rows = 20;
const cols = 20;
const gap = 2;
const speed = 0.5;
let time = 0;

const cubes = shallowRef(
    Array.from({ length: rows * cols }, (_, i) => ({
        position: new T.Vector3(
            (i % cols - cols / 2) * gap,
            0,
            (Math.floor(i / cols) - rows / 2) * gap,
        ),
    }))
);

const { onLoop } = useRenderLoop();

onLoop(() => {
    const time = Date.now() * 0.001;
    cubes.value.forEach((cube) => {
        const x = cube.position.x;
        const z = cube.position.z;
        cube.position.y = Math.sin(x * 2. + time) * Math.cos(z * 2. + time) * 5;
    });
});
</script>