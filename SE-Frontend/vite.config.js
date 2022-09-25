import { fileURLToPath, URL } from 'node:url'

import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// const config: UserConfig={
//   plugins:[vue()]
// }

// export default config
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// module.exports = defineConfig({
//   transplieDependencies:true,
//   devServer:{
//     proxy:{
//       "/api":{
//         target:"http://59.110.140.64/test/",
//         changeOrigin:true
//       }
//     }
//   }
// })