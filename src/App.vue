<template>
    <!-- Background 3D fixo -->
    <div class="fixed inset-0 bg-black" style="z-index: 0;">
        <Background3D />
    </div>

    <!-- Conteúdo com efeito de vidro -->
    <div class="relative" style="z-index: 1;">
        <nav class="sticky top-0 z-50">
            <NavBar />
        </nav>
        
        <!-- Seções com fundo translúcido -->
        <main class="relative">
            <Hero3D />

            <div class="backdrop-blur-sm">
                <AboutUs id="sobre" />
                <Products id="servicos" />
                <Portfolio id="portfolio" />
                <Contact id="contato" />
                <Footer />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Background3D from '@/components/Background3D.vue';
import Hero3D from '@/components/Hero3D.vue';
import AboutUs from '@/components/AboutUs.vue';
import Products from '@/components/Products.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
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
