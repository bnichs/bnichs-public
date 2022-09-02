<script setup lang="ts">
import MainBox from '@/components/MainBox.vue'
import TagBox from '@/components/TagBox.vue'
</script>

<template>
  <MainBox>
    <template #title>
      Posts
      <span class="tagTitle" v-if="tag" >
      ... with tag: {{ tag }}
      </span>

      <RouterLink :to="{ name: 'blog'}">
        <span class="tagTitle" v-if="tag" >
          View all posts
        </span>
      </RouterLink>

    </template>

    <template #content>
      <div class="postPreview" v-if="manifestLoaded" v-for="[ref, post] in posts">
        <RouterLink :to="{ name: 'blog_post', params: { ref: ref } }">
          <h3 class="postPreviewTitle">{{ post.title }}</h3>
        </RouterLink>

        <TagBox :tags="post.tags">
        </TagBox>

            <span class="postPreviewText" v-html="post.preview"></span>

        <RouterLink :to="{ name: 'blog_post', params: { ref: ref } }">
          <span class="viewPostButton">View Post...</span>
        </RouterLink>
      </div>
      <div v-if="!posts">
        No posts found...
      </div>
    </template>
  </MainBox>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import type {PostInfo} from '@/blog'
import {fetchManifest, PostManifest} from "@/blog";
import {useRoute} from "vue-router";


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
    tag(){
      const route = useRoute()
      return route.query.tag as string
    },
    manifestLoaded(){
      return this.manifest.loaded()
    },
    posts(){
      console.log(this.tag)
      if (! this.tag){
        return this.manifest.posts
      } else {
        return new Map(
            Array.from(this.manifest.posts).filter(([ref, post]) => {
              if (! post.tags.includes(this.tag)){
                return false
              }

              return true;
            }),
        );
      }
    }
  }
})

</script>

<style>
.tagBox {
  float: right;
  width: 30%;
}


.tagTitle {
  font-size: .5em;
}


.postPreviewTitle {
  /*font-size: 2.5em;*/
  margin: 0 0 4vh 0;
  width: 70%;
  float: left;
}

.postPreview {
  margin: 0 0 5vh 0;
  border: 1px solid var(--color-border);
  padding: 5vh 1vw 10vh 2vw;
}
.postPreviewText{
  /*font-size: 1.5em;*/
  overflow-y: hidden;
  max-height: 10em;
  display: inline-block;
}

.viewPostButton {
  font-size: 1.5em;
  float: right;
}

@media (max-width: 1024px) {
  .postPreview{
    padding-top: 2vh;
    padding-bottom: 4vh;
  }
}


</style>
