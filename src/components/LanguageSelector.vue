<template>
    <div class="relative">
        <!-- Botão do Seletor -->
        <button 
            @click="isOpen = !isOpen"
            class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
            <Globe class="w-5 h-5" />
            <img 
                :src="currentLanguage.flag" 
                :alt="currentLanguage.name"
                class="w-5 h-5 object-cover"
            />
            <ChevronDown class="w-4 h-4" :class="{ 'rotate-180': isOpen }" />
        </button>

        <!-- Dropdown -->
        <div 
            v-if="isOpen"
            class="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-xl border border-zinc-800 py-2 z-50"
        >
            <button 
                v-for="lang in languages" 
                :key="lang.code"
                @click="changeLanguage(lang.code)"
                class="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-zinc-800 hover:text-white transition-colors"
                :class="{ 'bg-zinc-800 text-white': currentLocale === lang.code }"
            >
                <img 
                    :src="lang.flag" 
                    :alt="lang.name"
                    class="w-5 h-5 object-cover"
                />
                <span>{{ lang.name }}</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Globe, ChevronDown } from 'lucide-vue-next';

const { locale } = useI18n();
const isOpen = ref(false);

const currentLocale = computed(() => locale.value);

const languages = [
    { code: 'pt-BR', name: 'Português', flag: '/images/flags/br.svg' },
    { code: 'en', name: 'English', flag: '/images/flags/uk.svg' },
    { code: 'es', name: 'Español', flag: '/images/flags/es.svg' },
    { code: 'ja', name: '日本語', flag: '/images/flags/jp.svg' },
    { code: 'pl', name: 'Polski', flag: '/images/flags/pl.svg' }
];

const currentLanguage = computed(() => {
    return languages.find(lang => lang.code === currentLocale.value) || languages[0];
});

const changeLanguage = (langCode: string) => {
    locale.value = langCode;
    isOpen.value = false;
};

// Fechar o dropdown quando clicar fora
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script> 