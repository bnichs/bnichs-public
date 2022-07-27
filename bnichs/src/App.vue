<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TitleBox from './components/HelloWorld.vue'
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->


    <div class="wrapper">
      <TitleBox msg="Ben Nichols" />

<!--      <div class="greetings">-->

<!--        <div class="bn-logo logo">-->
<!--          <span class='flip_H letter-1'>B</span>-->
<!--          <span class="letter-2">N</span>-->
<!--        </div>-->

<!--        <h1 class="green">{{ msg }}</h1>-->
<!--        <h3>-->
<!--          System Development and Automation-->
<!--        </h3>-->
<!--      </div>-->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/resume">Résumé</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script lang="ts">
import CONFIG from "./config"


export default {
  name: "App",
  mounted() {
    document.title = `${CONFIG.PAGE_TITLE}`;
  },
};
</script>

<style scoped>


header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
