<script setup lang="ts">
import {PERSON_OBJECTIVE, PERSON_NAME} from "@/config"
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
          {{ PERSON_OBJECTIVE }}
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

.the-name{
  text-align: center;
  color: var(--color-title);
  /*margin: 0vh 0 0 0;*/
}

h1 {
  font-weight: 500;
  font-size: 2.2em;
  /*top: -10px;*/
}

h3 {
  font-size: 1.2em;
}

.greetings{
  margin: 0 0 20px 0;
  width: fit-content;
}

.title-box{
  margin: 0 0 0vh 5vw;
}

.the-name{
  width: fit-content;
  font-size: 1.2em;
}

.the-subtitle{
  /*text-align: center;*/
  width: fit-content;
  font-size: .6em;
  color: var(--color-subtitle);
}


@media (min-width: 1024px) {
  .row .bn-logo{
    --bs-gutter-x: 0;
  }

  header{
    min-width: 290px;
  }

  .title-box{
    margin: .3em 0 0vh 2vw;
    width: 20vw;
  }

  .bn-logo #logoImg{
    width: 15vw !important;
  }
}

@media (max-width: 1024px) {
  .bn-logo{
    margin: 0 auto 0 auto;
  }

  .title-box{
    margin: 0em 0 0vh 5vw;
    font-size: 1.4rem;
  }

  .greetings{

    padding: .3em 0 0 0 ;
  }


}

</style>


<style>

@media (min-width: 1024px) {
  .bn-logo #logoImg{
    width: 6em;
    padding: .5em 0 0 0;
  }
}
</style>
