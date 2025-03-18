import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import "./style.css"; 

// Importar arquivos de tradução
import ptBR from './i18n/locales/pt-BR.json';
import en from './i18n/locales/en.json';
import es from './i18n/locales/es.json';
import ja from './i18n/locales/ja.json';
import pl from './i18n/locales/pl.json';

// Configurar i18n
const i18n = createI18n({
    legacy: false,
    locale: 'pt-BR',
    fallbackLocale: 'pt-BR',
    messages: {
        'pt-BR': ptBR,
        'en': en,
        'es': es,
        'ja': ja,
        'pl': pl
    }
});

// Criar e montar a aplicação
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
