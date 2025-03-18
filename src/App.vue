<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
// O router-view irá renderizar as páginas dinamicamente
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
