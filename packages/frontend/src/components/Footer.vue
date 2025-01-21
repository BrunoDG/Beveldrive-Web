<template>
    <footer class="bg-red-800 text-white py-6">
        <div class="container mx-auto px-4 text-center">
            <!-- Links -->
            <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <a href="#sobre" class="hover:text-blue-400">Sobre</a>
                <a href="#servicos" class="hover:text-blue-400">Serviços</a>
                <a href="#portfolio" class="hover:text-blue-400">Portfólio</a>
                <a href="#contato" class="hover:text-blue-400">Contato</a>
            </div>

            <!-- Redes Sociais -->
            <div class="mt-4 flex justify-center space-x-4">
                <a href="https://facebook.com" target="_blank" class="text-gray-400 hover:text-white"
                    aria-label="Facebook">
                    <Facebook class="w-5 h-5" />
                </a>
                <a href="https://instagram.com/BrunoDG" target="_blank" class="text-gray-400 hover:text-white"
                    aria-label="Instagram">
                    <Instagram class="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/BevelDrive" target="_blank" class="text-gray-400 hover:text-white"
                    aria-label="LinkedIn">
                    <Linkedin class="w-5 h-5" />
                </a>
            </div>

            <!-- Copyright -->
            <div class="mt-4 text-sm text-gray-400">
                &copy; 2025 Bevel Drive. Todos os direitos reservados.
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import {
    Facebook,
    Linkedin,
    Instagram
} from 'lucide-vue-next';
</script>
