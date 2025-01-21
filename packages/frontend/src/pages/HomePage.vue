<template>
    <div>
        <NavBar />
        <Hero3D />
        <section class="py-10 px-6 bg-white text-gray-800">
            <h2 class="text-3xl font-semibold text-center">Seja bem-vindo</h2>
            <p class="max-w-2xl mx-auto mt-4 text-center">
                Aqui você pode conhecer meus serviços, portfolio e entrar em contato.
            </p>
        </section>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Hero3D from '@/components/Hero3D.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>
