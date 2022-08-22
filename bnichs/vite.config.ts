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

// Convert svg to pngs and favicon
function convertImages () {
  return {
    name: 'convert-images', // this name will show up in warnings and errors
    async buildStart(opts){
      const sharp = require("sharp")

      let input = "public/bn-logo-full.svg"

      const metadata = await sharp(input).metadata();

      sharp(input)
          .resize({
            width: metadata.width,
            height: metadata.height,
          })
          .png()
          .toFile("public/bn-logo-full.png")
          .then(function(info) {
            // console.log(info)
          })
          .catch(function(err) {
            console.log(err)
          })

      sharp(input)
          .resize({
            width: metadata.width,
            height: metadata.height,
          })
          .extract({ left: 160, top: 0, width: 550, height: metadata.height})
          .png()
          .toFile("public/favicon.png")
          .then(function(info) {
            // console.log(info)
          })
          .catch(function(err) {
            console.log(err)
          })
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
      convertImages(),
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
