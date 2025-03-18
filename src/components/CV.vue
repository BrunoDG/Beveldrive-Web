<template>
    <section class="min-h-screen py-20 px-4" id="cv">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">{{ $t('nav.cv') }}</h2>

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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { marked } from 'marked';
import { useI18n } from 'vue-i18n';

type CvLanguage = 'pt-BR' | 'en';

const { locale } = useI18n();

const cvLanguages = [
    { code: 'pt-BR' as CvLanguage, name: 'Português' },
    { code: 'en' as CvLanguage, name: 'English' }
];

const currentCvLang = ref<CvLanguage>(locale.value as CvLanguage);

// Aqui você pode importar seus arquivos Markdown
const cvContent: Record<CvLanguage, string> = {
    'pt-BR': `# Currículo

## Experiência Profissional

### Desenvolvedor Full Stack
**Empresa XYZ** | 2020 - Presente
- Desenvolvimento de aplicações web usando Vue.js e Node.js
- Implementação de APIs RESTful com FastAPI
- Gerenciamento de banco de dados PostgreSQL

### Desenvolvedor Frontend
**Empresa ABC** | 2018 - 2020
- Criação de interfaces responsivas com React
- Otimização de performance e SEO
- Integração com APIs externas

## Educação

### Bacharel em Ciência da Computação
**Universidade XYZ** | 2014 - 2018
- Foco em desenvolvimento web e mobile
- Projetos de pesquisa em realidade virtual

## Habilidades

### Frontend
- Vue.js, React, Angular
- HTML5, CSS3, JavaScript/TypeScript
- Three.js, WebGL

### Backend
- Node.js, Python, FastAPI
- PostgreSQL, MongoDB
- Docker, Kubernetes

### Outras
- Git, CI/CD
- Metodologias Ágeis
- Design de UI/UX`,

    'en': `# Resume

## Professional Experience

### Full Stack Developer
**Company XYZ** | 2020 - Present
- Development of web applications using Vue.js and Node.js
- Implementation of RESTful APIs with FastAPI
- PostgreSQL database management

### Frontend Developer
**Company ABC** | 2018 - 2020
- Creation of responsive interfaces with React
- Performance and SEO optimization
- Integration with external APIs

## Education

### Bachelor in Computer Science
**University XYZ** | 2014 - 2018
- Focus on web and mobile development
- Virtual reality research projects

## Skills

### Frontend
- Vue.js, React, Angular
- HTML5, CSS3, JavaScript/TypeScript
- Three.js, WebGL

### Backend
- Node.js, Python, FastAPI
- PostgreSQL, MongoDB
- Docker, Kubernetes

### Others
- Git, CI/CD
- Agile Methodologies
- UI/UX Design`
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