<script setup lang="ts">
import BNLogo from './BNLogo.vue'
defineProps<{
  msg: string
}>()
import {PERSON_SUBTITLE, PERSON_NAME} from "../config"
</script>

<template>
  <div class="greetings row">
    <div class="col">

      <BNLogo></BNLogo>

<!--      <div class="bn-logo logo strikethrough">-->

<!--        <div class="logo-letter-wrapper">-->
<!--          <span class='flip_H letter-1'>B</span>-->
<!--          <span class="letter-2">N</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div class="col title-box">

      <h1 class="the-name green">
        {{ PERSON_NAME }}
      </h1>
      <h3 class="the-subtitle">
        {{ PERSON_SUBTITLE }}
      </h3>
    </div>
  </div>
</template>

<style scoped>

/*.logo-letter-wrapper{*/
/*  background-color: white;*/
/*  width: fit-content;*/
/*  margin: 0 auto 0 auto;*/
/*}*/

.title-box {
  padding: 4vh 0 0 0;
}


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


/*.vertical-center {*/
/*  margin: 0;*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  -ms-transform: translateY(-50%);*/
/*  transform: translateY(-50%);*/
/*}*/
</style>
