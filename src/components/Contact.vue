<template>
    <section class="min-h-screen py-10 md:py-20 px-2 md:px-4" id="contato">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10 text-center md:text-left">{{ t('title') }}</h2>

            <div class="grid md:grid-cols-2 gap-6 md:gap-10">
                <!-- Card do Formulário -->
                <div class="backdrop-blur-sm bg-zinc-900/30 rounded-lg p-4 md:p-8 w-full mx-auto max-w-lg md:max-w-none">
                    <h3 class="text-2xl font-bold text-white mb-6 text-center md:text-left">{{ t('formTitle') }}</h3>

                    <Form @submit="onSubmit" class="space-y-4">
                        <!-- Web3Forms Access Key -->
                        <input type="hidden" name="access_key" value="416304d5-8aac-4b4c-b1a4-960db4cfa28f">
                        <!-- Campos para personalização do email -->
                        <input type="hidden" name="from_name" value="Bevel Drive Contact Form">
                        <input type="hidden" name="subject" value="Novo contato via website">
                        <div>
                            <label class="text-white block mb-2">{{ t('name.label') }}</label>
                            <Field name="name" type="text" :rules="validateName" v-slot="{ field, errors }">
                                <input v-bind="field" :class="[
                                    'w-full p-2 rounded bg-zinc-900 text-white border transition-colors',
                                    errors.length ? 'border-red-500' : 'border-zinc-700 focus:border-[#9d0505]'
                                ]" :placeholder="t('name.placeholder')" />
                                <span class="text-red-500 text-sm" v-if="errors.length">{{ errors[0] }}</span>
                            </Field>
                        </div>

                        <div>
                            <label class="text-white block mb-2">{{ t('email.label') }}</label>
                            <Field name="email" type="email" :rules="validateEmail" v-slot="{ field, errors }">
                                <input v-bind="field" :class="[
                                    'w-full p-2 rounded bg-zinc-900 text-white border transition-colors',
                                    errors.length ? 'border-red-500' : 'border-zinc-700 focus:border-[#9d0505]'
                                ]" :placeholder="t('email.placeholder')" />
                                <span class="text-red-500 text-sm" v-if="errors.length">{{ errors[0] }}</span>
                            </Field>
                        </div>

                        <div>
                            <label class="text-white block mb-2">{{ t('message.label') }}</label>
                            <Field name="message" :rules="validateMessage" v-slot="{ field, errors }">
                                <div class="relative">
                                    <textarea 
                                        v-bind="field" 
                                        rows="4"
                                        class="w-full p-2 rounded bg-zinc-900 text-white border transition-colors outline-none resize-none"
                                        :class="[
                                            errors.length ? 'border-red-500' : 'border-zinc-700 focus:border-[#9d0505]'
                                        ]" 
                                        :placeholder="t('message.placeholder')"
                                        @input="updateCharCount"
                                    ></textarea>
                                    <div class="absolute right-2 bottom-2 flex items-center gap-2">
                                        <span :class="[
                                            'text-sm transition-colors',
                                            charCount >= 280 ? 'text-green-500' : 'text-gray-400'
                                        ]">
                                            {{ charCount }}/280
                                        </span>
                                        <div class="w-4 h-4 rounded-full border-2 transition-colors" :class="[
                                            charCount >= 280 ? 'border-green-500' : 'border-gray-400',
                                            'flex items-center justify-center'
                                        ]">
                                            <div v-if="charCount >= 280" class="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <span class="text-red-500 text-sm" v-if="errors.length">{{ errors[0] }}</span>
                            </Field>
                        </div>

                        <!-- Captcha -->
                        <div class="h-captcha" data-captcha="true"></div>

                        <button 
                            type="submit" 
                            :disabled="isSubmitting"
                            class="w-full bg-[#9d0505] hover:bg-red-700 text-white px-6 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                                <Loader2Icon class="w-4 h-4 animate-spin" />
                                {{ t('sending') }}
                            </span>
                            <span v-else>{{ t('submit') }}</span>
                        </button>

                        <!-- Mensagem de sucesso/erro -->
                        <div v-if="submitStatus" :class="[
                            'p-4 rounded text-center',
                            submitStatus.type === 'success' ? 'bg-green-600/80' : 'bg-red-600/80'
                        ]">
                            {{ submitStatus.message }}
                        </div>
                    </Form>
                </div>

                <!-- Informações de Contato - Visível apenas em desktop -->
                <div class="hidden md:block space-y-6">
                    <h3 class="text-2xl font-bold text-white mb-6 text-right">{{ t('contact.title') }}</h3>
                    <div class="space-y-6 text-gray-300">
                        <div class="flex items-center gap-4 justify-end">
                            <span>{{ t('contact.location') }}</span>
                            <MapPin class="text-[#9d0505] w-6 h-6" />
                        </div>
                        <div class="flex items-center gap-4 justify-end">
                            <span>{{ t('contact.email') }}</span>
                            <Mail class="text-[#9d0505] w-6 h-6" />
                        </div>
                        <div class="flex items-center gap-4 justify-end">
                            <span>{{ t('contact.phone') }}</span>
                            <Phone class="text-[#9d0505] w-6 h-6" />
                        </div>
                    </div>
                </div>

                <!-- Informações de Contato Compactas - Visível apenas em mobile -->
                <div class="md:hidden flex flex-col gap-3 items-center">
                    <a href="mailto:contato@beveldrive.com.br" class="flex items-center gap-2 text-gray-300">
                        <Mail class="text-[#9d0505] w-5 h-5" />
                        <span class="text-sm">{{ t('contact.email') }}</span>
                    </a>
                    <a href="tel:+5548988130991" class="flex items-center gap-2 text-gray-300">
                        <Phone class="text-[#9d0505] w-5 h-5" />
                        <span class="text-sm">{{ t('contact.phone') }}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Form, Field } from 'vee-validate';
import { MapPin, Mail, Phone, Loader2Icon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Objeto de traduções local
const translations: Record<string, any> = {
    'pt-BR': {
        title: 'Contato',
        formTitle: 'Fale Conosco',
        name: {
            label: 'Nome',
            placeholder: 'Seu nome',
            required: 'Nome é obrigatório',
            tooShort: 'Nome muito curto'
        },
        email: {
            label: 'Email',
            placeholder: 'seu@email.com',
            required: 'Email é obrigatório',
            invalid: 'Email inválido'
        },
        message: {
            label: 'Mensagem',
            placeholder: 'Sua mensagem',
            required: 'Mensagem é obrigatória',
            tooShort: 'Mensagem deve ter pelo menos 280 caracteres',
            tooLong: 'Mensagem não pode exceder 3000 caracteres'
        },
        submit: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.',
        contact: {
            title: 'Informações de Contato',
            location: 'Rio de Janeiro, RJ',
            email: 'contato@beveldrive.com.br',
            phone: '(48) 98813-0991'
        }
    },
    'en': {
        title: 'Contact',
        formTitle: 'Get in Touch',
        name: {
            label: 'Name',
            placeholder: 'Your name',
            required: 'Name is required',
            tooShort: 'Name is too short'
        },
        email: {
            label: 'Email',
            placeholder: 'your@email.com',
            required: 'Email is required',
            invalid: 'Invalid email'
        },
        message: {
            label: 'Message',
            placeholder: 'Your message',
            required: 'Message is required',
            tooShort: 'Message must be at least 280 characters',
            tooLong: 'Message cannot exceed 3000 characters'
        },
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! We will contact you soon.',
        error: 'Error sending message. Please try again.',
        contact: {
            title: 'Contact Information',
            location: 'Rio de Janeiro, RJ',
            email: 'contato@beveldrive.com.br',
            phone: '(48) 98813-0991'
        }
    },
    'es': {
        title: 'Contacto',
        formTitle: 'Contáctanos',
        name: {
            label: 'Nombre',
            placeholder: 'Tu nombre',
            required: 'El nombre es obligatorio',
            tooShort: 'El nombre es muy corto'
        },
        email: {
            label: 'Correo',
            placeholder: 'tu@email.com',
            required: 'El correo es obligatorio',
            invalid: 'Correo inválido'
        },
        message: {
            label: 'Mensaje',
            placeholder: 'Tu mensaje',
            required: 'El mensaje es obligatorio',
            tooShort: 'El mensaje debe tener al menos 280 caracteres',
            tooLong: 'El mensaje no puede exceder los 3000 caracteres'
        },
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        contact: {
            title: 'Información de Contacto',
            location: 'Rio de Janeiro, RJ',
            email: 'contato@beveldrive.com.br',
            phone: '(48) 98813-0991'
        }
    },
    'ja': {
        title: 'お問い合わせ',
        formTitle: 'お問い合わせフォーム',
        name: {
            label: 'お名前',
            placeholder: 'お名前を入力',
            required: '名前は必須です',
            tooShort: '名前が短すぎます'
        },
        email: {
            label: 'メールアドレス',
            placeholder: 'your@email.com',
            required: 'メールアドレスは必須です',
            invalid: '無効なメールアドレスです'
        },
        message: {
            label: 'メッセージ',
            placeholder: 'メッセージを入力',
            required: 'メッセージは必須です',
            tooShort: 'メッセージは280文字以上必要です',
            tooLong: 'メッセージは3000文字を超えることはできません'
        },
        submit: '送信',
        sending: '送信中...',
        success: 'メッセージを送信しました！近日中にご連絡いたします。',
        error: 'メッセージの送信に失敗しました。もう一度お試しください。',
        contact: {
            title: '連絡先情報',
            location: 'リオデジャネイロ, RJ',
            email: 'contato@beveldrive.com.br',
            phone: '(48) 98813-0991'
        }
    },
    'pl': {
        title: 'Kontakt',
        formTitle: 'Skontaktuj się z nami',
        name: {
            label: 'Imię',
            placeholder: 'Twoje imię',
            required: 'Imię jest wymagane',
            tooShort: 'Imię jest za krótkie'
        },
        email: {
            label: 'Email',
            placeholder: 'twoj@email.com',
            required: 'Email jest wymagany',
            invalid: 'Nieprawidłowy email'
        },
        message: {
            label: 'Wiadomość',
            placeholder: 'Twoja wiadomość',
            required: 'Wiadomość jest wymagana',
            tooShort: 'Wiadomość musi mieć co najmniej 280 znaków',
            tooLong: 'Wiadomość nie może przekraczać 3000 znaków'
        },
        submit: 'Wyślij wiadomość',
        sending: 'Wysyłanie...',
        success: 'Wiadomość wysłana pomyślnie! Skontaktujemy się wkrótce.',
        error: 'Błąd podczas wysyłania wiadomości. Spróbuj ponownie.',
        contact: {
            title: 'Informacje kontaktowe',
            location: 'Rio de Janeiro, RJ',
            email: 'contato@beveldrive.com.br',
            phone: '(48) 98813-0991'
        }
    }
};

// Helper para obter as traduções
const t = computed(() => (key: string) => {
    const keys = key.split('.');
    let value = translations[locale.value] || translations['pt-BR'];
    
    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }
    
    return value;
});

const isSubmitting = ref(false);
const submitStatus = ref<{ type: 'success' | 'error'; message: string } | null>(null);
const charCount = ref(0);

// Validações
const validateName = (value: unknown): string | true => {
    if (typeof value !== 'string') return t.value('name.required');
    if (!value) return t.value('name.required');
    if (value.length < 3) return t.value('name.tooShort');
    return true;
};

const validateEmail = (value: unknown): string | true => {
    if (typeof value !== 'string') return t.value('email.required');
    if (!value) return t.value('email.required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t.value('email.invalid');
    return true;
};

const validateMessage = (value: unknown): string | true => {
    if (typeof value !== 'string') return t.value('message.required');
    if (!value) return t.value('message.required');
    if (value.length < 280) return t.value('message.tooShort');
    if (value.length > 3000) return t.value('message.tooLong');
    return true;
};

const updateCharCount = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    charCount.value = target.value.length;
};

const onSubmit = async (values: any) => {
    isSubmitting.value = true;
    submitStatus.value = null;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: '416304d5-8aac-4b4c-b1a4-960db4cfa28f',
                ...values
            })
        });

        const data = await response.json();

        if (data.success) {
            submitStatus.value = {
                type: 'success',
                message: t.value('success')
            };
        } else {
            throw new Error(data.message || t.value('error'));
        }
    } catch (error) {
        submitStatus.value = {
            type: 'error',
            message: t.value('error')
        };
    } finally {
        isSubmitting.value = false;
    }
};
</script> 