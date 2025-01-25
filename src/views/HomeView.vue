<template>
    <NavBar />
    <main class="bg-black">
        <!-- Hero Section com a animação 3D -->
        <Hero3D />

        <!-- Seções principais -->
        <AboutUs id="sobre" />
        <Products id="servicos" />
        <Portfolio id="portfolio" />
        <Contact id="contato" />

        <!-- Footer -->
        <Footer />
    </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Hero3D from '@/components/Hero3D.vue';
import AboutUs from '@/components/AboutUs.vue';
import Products from '@/components/Products.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
</script>