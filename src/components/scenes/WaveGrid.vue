<template>
    <primitive :object="gridGroup" />
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { useRenderLoop } from '@tresjs/core';

const rows = 70;
const cols = 70;
const gap = 1;

const gridGroup = new THREE.Group();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhysicalMaterial({
    color: '#333333',      // Cinza escuro
    emissive: '#000000',   // Sem emissão própria
    metalness: 0.9,        // Bem metálico para refletir mais
    roughness: 0.1,        // Bem polido
    reflectivity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.5   // Aumenta a intensidade das reflexões
});

// Criar matriz de cubos
const cubes: THREE.Mesh[] = [];

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
            (j - cols / 2) * gap,
            0,
            (i - rows / 2) * gap
        );
        cube.castShadow = true;
        cube.receiveShadow = true;
        gridGroup.add(cube);
        cubes.push(cube);
    }
}

const { onLoop } = useRenderLoop();

onLoop(() => {
    const time = Date.now() * 0.001;
    cubes.forEach((cube) => {
        const x = cube.position.x;
        const z = cube.position.z;
        const distance = Math.sqrt(x * x + z * z);
        // Ajustando a amplitude baseada na distância do centro
        const amplitude = Math.max(0.5, 5 - distance * 0.1);
        cube.position.y = Math.sin(distance * 0.1 - time) * amplitude;
        
        // Rotação sutil dos cubos
        cube.rotation.x = Math.sin(time * 0.5) * 0.1;
        cube.rotation.z = Math.cos(time * 0.5) * 0.1;
    });
});
</script>