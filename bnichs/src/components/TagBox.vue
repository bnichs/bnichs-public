<template>
  <div class="tagBox">
    <span>
    Tags:
    </span>

    <div v-for="tag in tags">
      <RouterLink :to="{ name: 'blog', query: { tag: tag } }">
        <span class="tag">
          {{ tag }}
        </span>
      </RouterLink>
    </div>
  </div>
  <div style="clear:both;"></div>

</template>


<script lang="ts">
import {defineComponent} from "vue";



export default defineComponent({

  props: {
    tags: {
      default: [],
      type: Array<string>
    }
  },
  mounted() {
  },

  computed: {

    // manifestLoaded(){
    //   return this.manifest.loaded()
    // }
  }
})

</script>
<style scoped>
.tagBox span {
  float: left;
  padding: 2px 3px 2px 3px;
}

.tagBox .tag {
  border-radius: 5px;
  background: #73AD21;
  margin: 0 .2vw 0 .5vw;
}

</style>
