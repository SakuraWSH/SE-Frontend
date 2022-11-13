import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// export default config
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    vueOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith("")
        }
      }
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  transplieDependencies: true,
  server: {
    host: '127.0.0.1',// 本机ip
    port: 5173,
    open: true, // 自动打开 
    ws: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',	// 实际请求地址@liupei
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
})
