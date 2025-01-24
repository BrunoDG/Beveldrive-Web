<template>
  <TresCanvas shadows class="block w-full h-full relative overflow-hidden">
    <TresPerspectiveCamera makeDefault :position="[0, 5, 10]" :look-at="[0, 0, 0]" />
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight position="[10, 10, 10]" :intensity="1.5" castShadow />
    <TresMesh position="[0, 0, 0]" castShadow receiveShadow>
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshStandardMaterial color="red" />
    </TresMesh>
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
</script>
