import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
  
// })


export default defineConfig({
  build: { target: "es2020" },
  optimizeDeps: {
    esbuildOptions: { target: "es2020", supported: { bigint: true } }
  },
  define: {
    global: 'globalThis'
},
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      buffer: true
  })
    ]
// plugins: [reactRefresh()]
})