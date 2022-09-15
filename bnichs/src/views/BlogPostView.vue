<script setup lang="ts">
import MainBox from '../components/MainBox.vue'
import BlogPostInfo from '../components/BlogPostInfo.vue'
</script>

<template>
  <MainBox v-if="manifestLoaded">
    <template #title>
      {{ postInfo.title }}
    </template>
    <template #content>
      <BlogPostInfo :published="postInfo.published_date" :updated="postInfo.updated_date">
      </BlogPostInfo>

      <span class="blogPost" v-html="htmlSource"></span>

    </template>
  </MainBox>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {fetchManifest, fetchPost, PostManifest, PostInfo} from "@/blog";
import 'highlight.js/styles/monokai.css';


export default defineComponent({
  components: {
  },
  data(){
    return {
      posts: null,
      manifest: new PostManifest({}) as PostManifest,
      postInfo: new PostInfo({}) as PostInfo,
      htmlSource: "",
    }
  },
  created() {
    fetchManifest().then(p => {
      this.manifest = p
      const ref = this.$route.params.ref as string
      this.postInfo = this.manifest.posts.get(ref) as PostInfo
      console.log(this.postInfo)
      return this.postInfo
    }).then(pInfo => {
      fetchPost(pInfo.fetch_path).then(pText => {
        console.log(pText)
        this.htmlSource = pText
      })
    })
    console.log("Heres the man")
    console.log(this.manifest)
    console.log("created")
    console.log(this.$route.params);

  },
  computed: {
    manifestLoaded(){
      return this.manifest.loaded()
    }
  }
})

</script>

<style>

.blogInfo {
  border: 1px solid var(--color-border);
  display: block;
  padding: .8em;
  width: fit-content;
  margin-bottom: 2em;
}

.blogInfo ul{
  list-style: none;
  padding-left: 0;
}


.blogPost{
  display: inline-block;
  margin-bottom: 5em;
}

.blogPost p {
  font-size: 1.4rem;
}

.blogPost h1 {
  font-size: 2rem;
}


.blogPost h2 {
  font-size: 1.9rem;
}

.blogPost h3 {
  font-size: 1.8rem;
}

.blogPost h4 {
  font-size: 1.7rem;
}

.blogPost h4 {
  font-size: 1.6rem;
}

</style>
