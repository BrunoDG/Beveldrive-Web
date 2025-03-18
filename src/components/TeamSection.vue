<template>
    <section class="min-h-screen py-20 px-4" id="equipe">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10">{{ $t('nav.team') }}</h2>
            <p class="text-gray-300 text-lg mb-12">{{ $t('team.description') }}</p>

            <!-- Grid de Membros -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="member in teamMembers" :key="member.name"
                    class="group backdrop-blur-sm bg-zinc-900/50 rounded-lg overflow-hidden hover:bg-zinc-900 transition-all duration-300 relative">
                    <!-- Imagem -->
                    <div class="aspect-square w-full">
                        <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover" />
                    </div>

                    <!-- Conteúdo (aparece no hover) -->
                    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 class="text-xl font-bold text-white mb-2">{{ member.name }}</h3>
                        <p class="text-gray-400 mb-4">{{ $t(member.roleKey) }}</p>
                        <p class="text-gray-300 text-sm mb-4 text-center">{{ $t(member.descriptionKey) }}</p>
                        
                        <div class="flex gap-4">
                            <a :href="member.linkedin" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                                <Linkedin class="w-5 h-5" />
                            </a>
                            <a :href="member.github" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                                <GithubIcon class="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Seção de Vagas -->
            <div class="mt-20 text-center">
                <h3 class="text-2xl font-bold text-white mb-4">{{ $t('team.openPositions') }}</h3>
                <p class="text-gray-300 mb-6">{{ $t('team.positionsDescription') }}</p>
                <a href="#contato" class="inline-block bg-[#9d0505] hover:bg-red-600 text-white px-6 py-3 rounded transition-colors">
                    {{ $t('team.contactUs') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Linkedin, GithubIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface TeamMember {
    name: string;
    roleKey: string;
    photo: string;
    descriptionKey: string;
    linkedin: string;
    github: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Bruno Dias',
        roleKey: 'team.roles.founder',
        photo: '/images/team/bruno_dias.png',
        descriptionKey: 'team.members.bruno',
        linkedin: 'https://linkedin.com/in/brunodias',
        github: 'https://github.com/brunodias'
    }
];
</script> 