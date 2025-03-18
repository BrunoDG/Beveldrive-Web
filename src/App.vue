<template>
    <HomeView />
</template>

<script setup lang="ts">
import HomeView from './views/HomeView.vue';
</script>

<style>
body {
    background-color: black;
    overflow-x: hidden;
}

/* Suavizar a rolagem */
html {
    scroll-behavior: smooth;
}
</style>
