<script setup lang="ts">
import MainBox from '../components/MainBox.vue'
</script>

<template>
  <MainBox v-if="manifestLoaded">
    <template #title>
      {{ this.postInfo.title }}
    </template>
    <template #content>
      {{ this.postInfo }}
    </template>
  </MainBox>
  <main>

<!--    {{ posts }}-->

<!--    <div class="postPreview" v-for="post in this.posts">-->
<!--      <a :href="post.permalink">-->
<!--        <h3>{{ post.title }}</h3>-->
<!--        <p>{{ post.preview }}</p>-->
<!--      </a>-->

<!--      {{ post }}-->
<!--    </div>-->
  </main>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {fetchManifest, fetchPost, PostManifest, PostInfo} from "@/blog";


export default defineComponent({
  data(){
    return {
      posts: null,
      manifest: new PostManifest({}) as PostManifest,
      postInfo: new PostInfo({}) as PostInfo
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
