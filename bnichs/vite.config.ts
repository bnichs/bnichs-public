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
//
// function flattenSVG (svg) {
//   const images = svg.match(/<image [^>]+>/g);
//   if (!images || images.length < 1) {
//     return svg;
//   }
//
//   var result = svg;
//   images.forEach(image => {
//     const [,data] = image.match(/ xlink:href="data:image\/svg\+xml;base64,([^"]+)"/) || [];
//     if (!data) {
//       return;
//     }
//
//     const innerSVG = Buffer.from(data, 'base64').toString();
//     const [,width] = image.match(/ width="([^"]+)"/) || [];
//     const [,height] = image.match(/ height="([^"]+)"/) || [];
//     const [,opacity] = image.match(/ opacity="([^"]+)"/) || [];
//     const [,x] = image.match(/ x="([^"]+)"/) || [];
//     const [,y] = image.match(/ y="([^"]+)"/) || [];
//     const [header] = innerSVG && innerSVG.match(/<svg[^>]+>/) || [];
//     const fixedHeader = header
//         .replace(/ (x|y|width|height)="([^"]+)"/g, '')
//         .replace('<svg', `<svg x="${x}" y="${y}" width="${width}" height="${height}" opacity="${opacity || 1.0}"`);
//     const replacement = innerSVG && innerSVG.replace(header, fixedHeader);
//     result = result.replace(image, replacement);
//   });
//
//   return result;
// }


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
          .extract({ left: 160, top: 0, width: 542, height: metadata.height})
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
