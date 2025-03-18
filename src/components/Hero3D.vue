<template>
    <section class="relative w-full h-screen">
        <!-- Texto da Hero -->
        <div class="absolute inset-0 flex items-center">
            <div class="relative z-20 text-white w-full md:w-1/2 flex flex-col justify-center p-8 text-center md:text-start">
                <h1 class="text-4xl md:text-5xl font-bold">{{ $t('hero.title') }}</h1>
                <p class="mt-4 text-lg md:text-xl text-gray-300">
                    {{ $t('hero.subtitle') }}
                </p>
                <div class="mt-6 flex justify-center md:justify-start">
                    <a href="#sobre"
                        class="bg-[#9d0505] hover:bg-red-600 w-60 h-10 text-white p-6 rounded-md flex items-center justify-center">
                        {{ $t('hero.cta') }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>
