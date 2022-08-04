import { fileURLToPath, URL } from 'node:url'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import {buildManifest} from "./build/build_blog";


function buildBlog () {
  return {
    name: 'build-blog', // this name will show up in warnings and errors
    buildStart(opts){
      buildManifest()
    },
  };
}


export function CustomHmr() {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      console.log(file)
      if (file.endsWith('.md')) {
        console.log('reloading md file...');

        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    },
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    buildBlog(),
    splitVendorChunkPlugin(),
      // CustomHmr(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/your-package-name/**'],
      // paths: [
      //
      // ],
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          markdown: [
          ]
        }
      },
    }
  }
})
