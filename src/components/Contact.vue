<template>
    <section class="min-h-screen bg-black py-20 px-4" id="contato">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">Contato</h2>

            <div class="grid md:grid-cols-2 gap-10">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-white">Fale Conosco</h3>

                    <Form @submit="onSubmit" class="space-y-4">
                        <!-- Web3Forms Access Key -->
                        <input type="hidden" name="access_key" value="416304d5-8aac-4b4c-b1a4-960db4cfa28f">
                        <!-- Campos para personalização do email -->
                        <input type="hidden" name="from_name" :value="'Bevel Drive Contact Form'">
                        <input type="hidden" name="subject" :value="'Novo contato via website'">
                        <div>
                            <label class="text-white block mb-2">Nome</label>
                            <Field name="name" type="text" :rules="validateName" v-slot="{ field, errors }">
                                <input v-bind="field" :class="[
                                        'w-full p-2 rounded bg-zinc-900 text-white border transition-colors',
                                        errors.length ? 'border-red-500' : 'border-zinc-700 focus:border-[#9d0505]'
                                    ]" placeholder="Seu nome completo" />
                                <span class="text-red-500 text-sm" v-if="errors.length">{{ errors[0] }}</span>
                            </Field>
                        </div>

                        <div>
                            <label class="text-white block mb-2">Email</label>
                            <Field name="email" type="email" :rules="validateEmail" v-slot="{ field, errors }">
                                <input v-bind="field" :class="[
                                        'w-full p-2 rounded bg-zinc-900 text-white border transition-colors',
                                        errors.length ? 'border-red-500' : 'border-zinc-700 focus:border-[#9d0505]'
                                    ]" placeholder="seu@email.com" />
                                <span class="text-red-500 text-sm" v-if="errors.length">{{ errors[0] }}</span>
                            </Field>
                        </div>

                        <div>
                            <label class="text-white block mb-2">Mensagem</label>
                            <Field name="message" v-slot="{ field, errors }">
                                <textarea v-bind="field" rows="4"
                                    class="w-full p-2 rounded bg-zinc-900 text-white border transition-colors outline-none resize-none"
                                    :class="[
                                        errors.length ? 'border-red-500' : 'border-zinc-700 focus:border-[#9d0505]'
                                    ]" placeholder="Sua mensagem..."></textarea>
                                <span class="text-red-500 text-sm" v-if="errors.length">{{ errors[0] }}</span>
                            </Field>
                        </div>

                        <!-- Captcha -->
                        <div class="h-captcha" data-captcha="true"></div>

                        <Button type="submit" :disabled="isSubmitting" :class="[
                                'bg-[#9d0505] hover:bg-red-700 text-white px-6 py-2 rounded w-full',
                                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            ]">
                            <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                                <Loader2Icon class="w-4 h-4 animate-spin" />
                                Enviando...
                            </span>
                            <span v-else>Enviar Mensagem</span>
                        </Button>

                        <!-- Mensagem de sucesso/erro -->
                        <div v-if="submitStatus" :class="[
                                 'p-4 rounded text-center',
                                 submitStatus.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                             ]">
                            {{ submitStatus.message }}
                        </div>
                    </Form>
                </div>

                <div class="space-y-6 text-right">
                    <h3 class="text-2xl font-bold text-white">Informações de Contato</h3>
                    <div class="space-y-4 text-gray-300">
                        <div class="flex items-center gap-2 justify-end">
                            <span>Rio de Janeiro, RJ</span>
                            <MapPin class="text-[#9d0505]" />
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                            <span>contato@beveldrive.com.br</span>
                            <Mail class="text-[#9d0505]" />
                        </div>
                        <div class="flex items-center gap-2 justify-end">
                            <span>(48) 98813-0991</span>
                            <Phone class="text-[#9d0505]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Form, Field } from 'vee-validate';
import { MapPin, Mail, Phone, Loader2Icon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import * as yup from 'yup';

const isSubmitting = ref(false);
const submitStatus = ref<{ type: 'success' | 'error'; message: string } | null>(null);

// Validações
const validateName = yup.string().required('Nome é obrigatório').min(3, 'Nome muito curto');
const validateEmail = yup.string().required('Email é obrigatório').email('Email inválido');

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
                message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
            };
        } else {
            throw new Error(data.message || 'Erro ao enviar mensagem');
        }
    } catch (error) {
        submitStatus.value = {
            type: 'error',
            message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
        };
    } finally {
        isSubmitting.value = false;
    }
};

// Adicione no head da página
onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://web3forms.com/client/script.js';
    script.async = true;
    document.head.appendChild(script);
});
</script> 