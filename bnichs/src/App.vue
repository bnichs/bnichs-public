<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TitleBox from './components/TitleBox.vue'
</script>

<template>

  <!--  {{ this.bare }}-->
  <!--  <div v-if="bare">-->
  <!--    <RouterView />-->
  <!--  </div>-->
  <!--  <div v-else>-->
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <TitleBox msg="Ben Nichols" />
        <!--                    Home-->
      </RouterLink>

      <nav>
        <RouterLink to="/resume">Resume/CV & Skills</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <div style="clear:both;"></div>

  <footer>
    Copyright Ben Nichols
  </footer>
  <!--  </div>-->
</template>


<script lang="ts">
import CONFIG from "./config"


export default {
  name: "App",
  props: {
    bare: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
  },
};
</script>

<style scoped>

footer{
  float: right;
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  text-align: center;
  display: block;
  margin: 10vh 0 0 0;
}

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
