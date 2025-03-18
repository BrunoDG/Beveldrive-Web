<template>
    <section class="min-h-screen py-20 px-4" id="sobre">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">{{ $t('about.title') }}</h2>

            <div class="grid md:grid-cols-2 gap-10">
                <div class="text-gray-300 space-y-6">
                    <p class="text-lg">
                        {{ $t('about.description1') }}
                    </p>
                    <p class="text-lg">
                        {{ $t('about.description2') }}
                    </p>
                </div>

                <div class="bg-[#9d0505] p-8 rounded-lg">
                    <h3 class="text-2xl font-bold text-white mb-4">{{ $t('about.values.title') }}</h3>
                    <ul class="text-white space-y-4">
                        <li class="flex items-center gap-2">
                            <CheckCircle class="w-5 h-5" />
                            {{ $t('about.values.innovation') }}
                        </li>
                        <li class="flex items-center gap-2">
                            <CheckCircle class="w-5 h-5" />
                            {{ $t('about.values.excellence') }}
                        </li>
                        <li class="flex items-center gap-2">
                            <CheckCircle class="w-5 h-5" />
                            {{ $t('about.values.commitment') }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Slider de Clientes -->
            <div class="mt-20">
                <h3 class="text-2xl font-bold text-white mb-10 text-center">{{ $t('about.clients.title') }}</h3>
                
                <div class="relative overflow-hidden">
                    <!-- Gradientes -->
                    <div class="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-black to-transparent"></div>
                    <div class="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-black to-transparent"></div>
                    
                    <!-- Logos -->
                    <div class="flex animate-scroll">
                        <div class="flex items-center min-w-max px-4 md:px-8">
                            <div v-for="(client, index) in clients" 
                                 :key="`client-1-${index}`"
                                 class="mx-8 md:mx-16 flex-shrink-0">
                                <img :src="client.logo" 
                                     :alt="client.name"
                                     class="h-8 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        </div>
                        <!-- Duplicata -->
                        <div class="flex items-center min-w-max px-4 md:px-8">
                            <div v-for="(client, index) in clients" 
                                 :key="`client-2-${index}`"
                                 class="mx-8 md:mx-16 flex-shrink-0">
                                <img :src="client.logo" 
                                     :alt="client.name"
                                     class="h-8 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next';
import { clients } from '@/data/clients';
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    animation: scroll 15s linear infinite;
}

@media (max-width: 768px) {
    .animate-scroll {
        animation: scroll 10s linear infinite;
    }
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>