<script setup lang="ts">
import {PERSON_SUBTITLE, PERSON_NAME} from "@/config"
import BNLogo from './BNLogo.vue'
// defineProps<{
//   // msg: string
// }>()
</script>

<template>
  <div class="greetings row mx-auto">
<!--    <div class="row title-box">-->

    <div class="col-md-auto logoWrapper">
      <RouterLink to="/">
        <BNLogo class=""></BNLogo>
      </RouterLink>
    </div>

    <div class="col col-md-auto title-box">
        <span class="row the-name">
          {{ PERSON_NAME }}
        </span>
        <span class="row the-subtitle">
          {{ PERSON_SUBTITLE }}
        </span>

<!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>

.logoWrapper{
  width: fit-content;
}

/*.title-box {*/
/*  padding: 4vh 0 0 0;*/
/*}*/

.the-name{
  text-align: center;
  color: var(--color-title);
  /*margin: 0vh 0 0 0;*/
}

h1 {
  font-weight: 500;
  font-size: 2.2rem;
  /*top: -10px;*/
}

h3 {
  font-size: 1.2rem;
}

.greetings{
  margin: 0 0 8vh 0;
  width: fit-content;
}

.title-box{
  margin: 0 0 0vh 5vw;
}

.the-name{
  width: fit-content;
  font-size: 1.2rem;
}

.the-subtitle{
  /*text-align: center;*/
  width: fit-content;
  font-size: .6rem;
}

/*.greetings h1,*/
/*.greetings h3 {*/
/*  text-align: center;*/
/*}*/

@media (min-width: 1024px) {
  /*.greetings h1,*/
  /*.greetings h3 {*/
  /*  text-align: left;*/
  /*}*/
  .row .bn-logo{
    --bs-gutter-x: 0;
  }

  header{
    min-width: 290px;
  }
  .title-box{
    margin: 0 0 0vh 2vw;
  }
}

@media (max-width: 1024px) {
  .bn-logo{
    margin: 0 auto 0 auto;
  }

  .title-box{
    margin: 0 0 0vh 10vw;
  }

  .greetings{
    margin: 0 0 5vh 0;
  }

}

</style>
