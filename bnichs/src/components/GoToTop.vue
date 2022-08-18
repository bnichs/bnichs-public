<template>
  <div class="goToTop">
    <p>
      <a @click="scrollToTop">
       Go to top
      </a>
    </p>
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";



export default defineComponent({

  props: {
    href: {
      type: String,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },

  computed: {

    // manifestLoaded(){
    //   return this.manifest.loaded()
    // }
  }
})

</script>
<style scoped>

.goToTop a{
  cursor: pointer;
}

</style>
