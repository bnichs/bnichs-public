<script setup lang="ts">
import MainBox from '@/components/MainBox.vue'
</script>

<template>
  <MainBox>
    <template #title>
      A blog
    </template>

    <template #content>
      <p>
        {{ manifest.posts }}
      </p>

      <div class="postPreview" v-if="manifestLoaded" v-for="[ref, post] in manifest.posts">
        <RouterLink :to="{ name: 'blog_post', params: { ref: ref } }">
          <div class="blogPreview">

            <h3>{{ post.title }}</h3>
            <p>{{ post.preview }}</p>
            {{ post }}
          </div>

        </RouterLink>
      </div>
    </template>
  </MainBox>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import type {PostInfo} from '@/blog'
import {fetchManifest, PostManifest} from "@/blog";
// import type {PostManifest} from "@/blog";


export default defineComponent({

  data(){
    return {
      manifest: new PostManifest({}) as PostManifest
    }
  },
  mounted() {
    fetchManifest().then(p => {
      this.manifest = p
    })
    console.log("Heres the man")
    console.log(this.manifest)
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
