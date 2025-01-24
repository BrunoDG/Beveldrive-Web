<template>
    <div class="flex flex-col min-h-10 overflow-hidden">
        <NavBar />
        <main>
            <Hero3D />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Hero3D from "@/components/Hero3D.vue";
import Footer from "@/components/Footer.vue";
</script>
