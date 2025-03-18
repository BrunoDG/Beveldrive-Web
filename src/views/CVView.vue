<template>
    <div class="min-h-screen bg-black">
        <NavBar />
        <main class="pt-20">
            <section class="min-h-screen py-20 px-4">
                <div class="container mx-auto">
                    <h1 class="text-4xl font-bold text-white mb-10">{{ $t('nav.cv') }}</h1>

                    <!-- Seletor de Idioma do CV -->
                    <div class="flex justify-end mb-8">
                        <div class="flex gap-2">
                            <button 
                                v-for="lang in cvLanguages" 
                                :key="lang.code"
                                @click="currentCvLang = lang.code"
                                class="px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
                                :class="[
                                    currentCvLang === lang.code 
                                        ? 'bg-[#9d0505] text-white' 
                                        : 'bg-zinc-800/30 text-gray-300 hover:bg-zinc-700/40'
                                ]"
                            >
                                {{ lang.name }}
                            </button>
                        </div>
                    </div>

                    <!-- Conteúdo do CV -->
                    <div class="backdrop-blur-sm bg-zinc-900/30 rounded-lg p-8">
                        <div class="prose prose-invert max-w-none" v-html="renderedCv"></div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { marked } from 'marked';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

type CvLanguage = 'pt-BR' | 'en';

const { locale } = useI18n();

const cvLanguages = [
    { code: 'pt-BR' as CvLanguage, name: 'Português' },
    { code: 'en' as CvLanguage, name: 'English' }
];

const currentCvLang = ref<CvLanguage>(locale.value as CvLanguage);

const cvContent: Record<CvLanguage, string> = {
    'pt-BR': `# Currículo

## Experiência Profissional

### Desenvolvedor Full Stack
**Bevel Drive** | 2023 - Presente
- Desenvolvimento de jogos e aplicações web
- Implementação de interfaces 3D interativas
- Gerenciamento de projetos e clientes

### Desenvolvedor Frontend
**Empresa XYZ** | 2020 - 2023
- Desenvolvimento de aplicações web usando Vue.js
- Implementação de interfaces responsivas
- Otimização de performance e SEO

## Educação

### Bacharel em Ciência da Computação
**Universidade XYZ** | 2014 - 2018
- Foco em desenvolvimento web e jogos
- Projetos de pesquisa em realidade virtual

## Habilidades

### Frontend
- Vue.js, React, Angular
- HTML5, CSS3, JavaScript/TypeScript
- Three.js, WebGL, ThreeJS
- TailwindCSS, Vee-Validate

### Backend
- Node.js, Python, FastAPI
- PostgreSQL, MongoDB
- Docker, Kubernetes

### Outras
- Git, CI/CD
- Metodologias Ágeis
- Design de UI/UX
- Desenvolvimento de Jogos`,

    'en': `# Resume

## Professional Experience

### Full Stack Developer
**Bevel Drive** | 2023 - Present
- Development of games and web applications
- Implementation of interactive 3D interfaces
- Project and client management

### Frontend Developer
**Company XYZ** | 2020 - 2023
- Development of web applications using Vue.js
- Implementation of responsive interfaces
- Performance and SEO optimization

## Education

### Bachelor in Computer Science
**University XYZ** | 2014 - 2018
- Focus on web and game development
- Virtual reality research projects

## Skills

### Frontend
- Vue.js, React, Angular
- HTML5, CSS3, JavaScript/TypeScript
- Three.js, WebGL, ThreeJS
- TailwindCSS, Vee-Validate

### Backend
- Node.js, Python, FastAPI
- PostgreSQL, MongoDB
- Docker, Kubernetes

### Others
- Git, CI/CD
- Agile Methodologies
- UI/UX Design
- Game Development`
};

const renderedCv = computed(() => {
    return marked(cvContent[currentCvLang.value]);
});
</script>

<style>
.prose {
    @apply text-gray-300;
}

.prose h1 {
    @apply text-3xl font-bold text-white mb-6;
}

.prose h2 {
    @apply text-2xl font-bold text-white mt-8 mb-4;
}

.prose p {
    @apply mb-4;
}

.prose ul {
    @apply list-disc list-inside mb-4;
}

.prose li {
    @apply mb-2;
}

.prose strong {
    @apply text-white;
}
</style> 