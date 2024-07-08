import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css:{
  },
  server: {
    host: '0.0.0.0',
    port: 7000,
    cors: true,
    // https: true,
    proxy: {
      "/gs-test": {
        target: 'http://8.222.255.108/',
        changeOrigin: true,
        // secure: false
      },
    }
  },
  plugins: [vue()],
})
