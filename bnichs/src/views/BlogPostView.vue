<script setup lang="ts">
import MainBox from '../components/MainBox.vue'
</script>

<template>
  <MainBox v-if="manifestLoaded">
    <template #title>
      {{ postInfo.title }}
    </template>
    <template #content>

<!--      {{ htmlSource }}-->
      <span v-html="htmlSource"></span>

<!--      <Markdown :source="mdSource" :plugins="plugins" />-->
    </template>
  </MainBox>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {fetchManifest, fetchPost, PostManifest, PostInfo} from "@/blog";
import 'highlight.js/styles/monokai.css';

// https://github.com/JanGuillermo/vue3-markdown-it
// import Markdown from 'vue3-markdown-it';
// import Markdown from 'vue3-markdown-it';
// const Markdown = () => import('vue3-markdown-it');
// import MarkdownHighlighter from 'markdown-it-highlightjs';
// import MetaPlugin from "markdown-it-meta";


// import hljs_core from 'highlight.js/lib/core'
// import hljs_js from 'highlight.js/lib/languages/javascript'
// import md_it from 'markdown-it'
// import md_it_hl from 'markdown-it-highlightjs'



export default defineComponent({
  components: {
    // Markdown,
  },
  data(){
    return {
      posts: null,
      manifest: new PostManifest({}) as PostManifest,
      postInfo: new PostInfo({}) as PostInfo,
      mdSource: "",
      htmlSource: "",
      plugins: [
        // {
        //   plugin: MarkdownHighlighter,
        // },
        // {
        //   plugin: MetaPlugin,
        // }
      ]
    }
  },
  created(){

  },
  mounted() {
    // const hljs = require('highlight.js/lib/core')

    // hljs_core.registerLanguage(
    //     'javascript',
    //     hljs_js
    // )
    //
    // const md = md_it()
    //     .use(md_it_hl, { hljs_core })


    fetchManifest().then(p => {
      this.manifest = p
      const ref = this.$route.params.ref as string
      this.postInfo = this.manifest.posts.get(ref) as PostInfo
      // this.postInfo =
      console.log(this.postInfo)
      return this.postInfo
    }).then(pInfo => {
      fetchPost(pInfo.path).then(pText => {
        console.log(pText)
        this.htmlSource = pText
      })
    })
    console.log("Heres the man")
    console.log(this.manifest)
    console.log("mounted")
    console.log(this.$route.params);


    // fetchPost().then(pText =>{
    //
    // })
    // const ref = this.$route.params.ref
    // console.log(ref)
    //
    // const postInfo = this.manifest.posts.get(ref)
    // console.log(postInfo)
    // console.log("mounted")
    // console.log(this.$route.params);
    // const ref = this.$route.params.ref
    // console.log(ref)
  },
  computed: {
    manifestLoaded(){
      return this.manifest.loaded()
    }
  }
})

</script>

<style>

</style>
