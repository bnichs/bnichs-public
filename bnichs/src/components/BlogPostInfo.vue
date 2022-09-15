<script setup lang="ts">
</script>

<template>
  <div class="blogInfo">
    <ul>
      <li class="blogInfoLine">Published: {{ published.toLocaleString() }}</li>
      <li class="blogInfoLine">Updated: {{ updated.toLocaleString() }}</li>
    </ul>
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {fetchManifest, fetchPost, PostManifest, PostInfo} from "@/blog";
import 'highlight.js/styles/monokai.css';


export default defineComponent({

  props: {
    updated: {
      type: Date,
      default: new Date()
    },
    published: {
      type: Date,
      default: new Date()
    },
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


</style>
