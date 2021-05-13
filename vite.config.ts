import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, "./src")
  },
  build: {
    base: './'
  },
  plugins: [vue()],
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