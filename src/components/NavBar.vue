<template>
    <nav class="bg-red-800 border-b">
        <div class="container mx-auto px-4 py-3 flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="text-2xl font-bold text-white">Bevel Drive</a>

            <!-- Navigation Menu -->
            <NavigationMenu>
                <NavigationMenuList class="hidden md:flex space-x-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#sobre" class="text-white hover:text-gray-500">
                            Sobre
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#servicos" class="text-white hover:text-gray-500">
                            Serviços
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#portfolio" class="text-white hover:text-gray-500">
                            Portfólio
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#contato" class="text-white hover:text-gray-500">
                            Contato
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-white" @click="menuOpen = !menuOpen" aria-label="Toggle Menu">
                <Menu class="w-6 h-6" />
            </button>
        </div>

        <!-- Mobile Dropdown -->
        <div v-if="menuOpen" class="md:hidden bg-red-600 shadow-md">
            <ul class="flex flex-col space-y-4 px-4 py-3">
                <li><a href="#sobre" class="text-gray-600 hover:text-gray-900">Sobre</a></li>
                <li><a href="#servicos" class="text-gray-600 hover:text-gray-900">Serviços</a></li>
                <li><a href="#portfolio" class="text-gray-600 hover:text-gray-900">Portfólio</a></li>
                <li><a href="#contato" class="text-gray-600 hover:text-gray-900">Contato</a></li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';

// Controle do menu mobile
const menuOpen = ref(false);
</script>
