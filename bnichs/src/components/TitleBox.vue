<script setup lang="ts">
import {PERSON_SUBTITLE, PERSON_NAME} from "@/config"
import BNLogo from './BNLogo.vue'
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">

    <BNLogo></BNLogo>

    <div class="title-box">

      <h1 class="the-name green">
        {{ PERSON_NAME }}
      </h1>
      <h3 class="the-subtitle">
        {{ PERSON_SUBTITLE }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>

.bn-logo object {
  pointer-events: none;
}

/*.title-box {*/
/*  padding: 4vh 0 0 0;*/
/*}*/
h1 {
  font-weight: 500;
  font-size: 2.2rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

@media (max-width: 1024px) {

  .bn-logo{
    margin: 0 auto 0 auto;
  }
}

</style>
