import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core';
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  define: {
    global: "globalThis", // Emula o objeto global no navegador
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Limpa a pasta dist antes de cada build
    assetsDir: 'assets', // Coloca todos os assets em uma subpasta
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
});
