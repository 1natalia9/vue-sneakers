import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
//  base: `/vue-sneakers-final`,
  publicPath: `/vue-sneakers-final/`,
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// import{defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/

// export default defineConfig({
//   base: '/deployng-vue-sneakers',
//   plugins: [vue()]
// })