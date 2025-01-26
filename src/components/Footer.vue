<template>
    <footer class="bg-[#9d0505] text-white py-4">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Links de Navegação -->
                <div class="space-y-2">
                    <h2 class="text-xl font-bold">Links</h2>
                    <div class="flex flex-col space-y-1">
                        <a href="#sobre" class="hover:text-gray-300 transition-colors">Sobre</a>
                        <a href="#servicos" class="hover:text-gray-300 transition-colors">Serviços</a>
                        <a href="#portfolio" class="hover:text-gray-300 transition-colors">Portfólio</a>
                        <a href="#contato" class="hover:text-gray-300 transition-colors">Contato</a>
                    </div>
                </div>

                <!-- Redes Sociais -->
                <div class="space-y-2">
                    <h2 class="text-xl font-bold">Redes Sociais</h2>
                    <div class="flex space-x-4">
                        <a href="https://instagram.com/BrunoDG" target="_blank" 
                            class="text-white hover:text-gray-300 transition-colors"
                            aria-label="Instagram">
                            <Instagram class="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/bevel-drive" target="_blank"
                            class="text-white hover:text-gray-300 transition-colors"
                            aria-label="LinkedIn">
                            <Linkedin class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="text-sm md:text-right flex items-center justify-end">
                    &copy; 2025 Bevel Drive.<br class="hidden md:block" />
                    Todos os direitos reservados.
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import {
    Linkedin,
    Instagram
} from 'lucide-vue-next';
</script>
