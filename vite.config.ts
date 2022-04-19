import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3System/',//基础路径 对应nginx的location和打包出来href="/vue3System/static/*“
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    },
  },
  plugins: [vue(), viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz',
  })],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8802,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8001',
      }
    }
  },
})
