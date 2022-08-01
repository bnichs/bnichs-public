<script setup lang="ts">
import MainBox from '../components/MainBox.vue'
</script>

<template>
  <MainBox v-if="manifestLoaded">
    <template #title>
      {{ postInfo.title }}
    </template>
    <template #content>
      {{ postInfo }}

      <Markdown :source="mdSource" :plugins="plugins" />
    </template>
  </MainBox>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {fetchManifest, fetchPost, PostManifest, PostInfo} from "@/blog";

// https://github.com/JanGuillermo/vue3-markdown-it
// import Markdown from 'vue3-markdown-it';
const Markdown = require('vue3-markdown-it');
import MarkdownHighlighter from 'markdown-it-highlightjs';
const MetaPlugin = require("markdown-it-meta");


export default defineComponent({
  components: {
    Markdown
  },
  data(){
    return {
      posts: null,
      manifest: new PostManifest({}) as PostManifest,
      postInfo: new PostInfo({}) as PostInfo,
      mdSource: "",
      plugins: [
        {
          plugin: MarkdownHighlighter,
        },
        {
          plugin: MetaPlugin,
        }
      ]
    }
  },
  created(){

  },
  mounted() {
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
        this.mdSource = pText
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
