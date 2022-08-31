import { fileURLToPath, URL } from 'node:url'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import {buildManifest} from "./build/build_blog";
import vitePrerender from "vite-plugin-prerender";


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


const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePrerender({
      // Required - The path to the vite-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [
        '/',
        '/about',
        '/contact',
        '/resume',
        '/services',
        '/contact',
        '/card'
      ],
      indexPath: path.join(__dirname, 'dist', 'index.html'),
    }),
    vue(),
    buildBlog(),
    convertImages(),
    splitVendorChunkPlugin(),
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
