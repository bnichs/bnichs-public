<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TitleBox from './components/TitleBox.vue'
</script>

<template>

  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <TitleBox />
      </RouterLink>

      <nav class="row justify-content-center">
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <div style="clear:both;"></div>

  <footer>
    Copyright Ben Nichols
  </footer>
</template>


<script lang="ts">
import {PAGE_TITLE} from "./config"


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

<style>

body{
  padding: 0 0 5vh 0;
}


footer{
  text-align: center;
  display: block;
  margin: 10vh 0 0 0;
}

.footer-text{
  position: absolute;
  left: 0px;
  bottom: 0px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  /*width: 100%;*/
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  width: fit-content !important;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


main{
  min-height: 100vh;
}



@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /*padding: 0 2rem;*/
    margin: 15vh 8vw 0 8vw;
  }

  header {
    /*margin: 15vh 0 0 0;*/
    display: flex;
    /*place-items: center;*/
    padding-right: calc(var(--section-gap) / 4);
  }


  header .wrapper {
    /*display: flex;*/
    /*place-items: flex-start;*/
    /*flex-wrap: wrap;*/
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: .8rem;

    padding: 1rem 0;
    margin-top: -150px;
  }


  main{
    margin: 15vh 0 10vh 0;
    width: 52vw;
  }

  .welcome-items {
    margin: 15vh 0 0 0
  }
}


@media (max-width: 1024px) {
  body{
    padding: 0 0 1vh 0;
  }

  main{
    padding: 1vh 0 0 0;
  }

  #app {
    padding: 2vh 6vw 0 6vw;
  }

  .welcome-items {
    margin: 2vh 0 0 0
  }

}

</style>
