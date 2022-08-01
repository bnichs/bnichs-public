<script setup lang="ts">
</script>

<template>
  <main>
    <h2>
      Coming soon
    </h2>

    <hr>
    {{ posts }}

    <div class="postPreview" v-for="post in manifest.posts">
      <a :href="post.permalink">
        <h3>{{ post.title }}</h3>
        <p>{{ post.preview }}</p>
      </a>
      {{ post }}
    </div>
  </main>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import type {Post} from '@/blog'
import {fetchManifest} from "@/blog";
import type {PostManifest} from "@/blog";


export default defineComponent({

  data(){
    return {
      manifest: PostManifest = new PostManifest({})
    }
  },
  mounted() {
    this.manifest = fetchManifest()
  }
})

</script>

<style>

</style>
