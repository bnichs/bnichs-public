import { fileURLToPath, URL } from 'node:url'

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import {buildManifest} from "./build/build_blog";


function buildBlog(){

}

function myExample () {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    buildStart(opts){
      buildManifest()

      // console.log(opts)
    },
    // resolveId ( source ) {
    //   console.log(source)
    //   if (source === 'virtual-module') {
    //     return source; // this signals that rollup should not ask other plugins or check the file system to find this id
    //   }
    //   return null; // other ids should be handled as usually
    // },
    // load ( id ) {
    //   console.log(id)
    //   if (id === 'virtual-module') {
    //     return 'export default "This is virtual!"'; // the source code for "virtual-module"
    //   }
    //   return null; // other ids should be handled as usually
    // }
  };
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    myExample(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          markdown: ['vue3-markdown-it', 'markdown-it-highlightjs']
        }
      },
    }
  }
})
