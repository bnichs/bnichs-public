<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <main>
    <h2>
      The post
    </h2>

    <hr>
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
export default {
  data(){
    return {
      posts: null
    }
  },
  mounted() {
    console.log(this.$route.params);
    const ref = this.$route.params.ref
    console.log(ref)
  }
}

</script>

<style>

</style>
