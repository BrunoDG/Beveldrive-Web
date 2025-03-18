import { createI18n } from 'vue-i18n';
import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';
import es from './locales/es.json';
import ja from './locales/ja.json';
import pl from './locales/pl.json';

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

export default i18n; 