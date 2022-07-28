<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <main>
    <h1>
      Contact Info
    </h1>

    <hr>

    <div class="contact">
    <a href="mailto:mail@ben-nichols.net" target="_blank">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-envelope"></i>
        </template>
        <template #heading>
          Email
        </template>

        <span class="text">
            mail@ben-nichols.net
          </span>
      </WelcomeItem>
    </a>
    </div>

    <div class="contact">
      <a href="https://www.linkedin.com/in/ben-j-nichols/" target="_blank">
        <WelcomeItem>
          <template #icon>
            <i class="bi bi-linkedin"></i>
          </template>
          <template #heading>
            LinkedIn
          </template>

          <span class="text">
            https://www.linkedin.com/in/ben-j-nichols/
          </span>

        </WelcomeItem>
      </a>

      <a href="https://github.com/bnichs" target="_blank">
        <WelcomeItem>
          <template #icon>
            <i class="bi bi-github"></i>
          </template>
          <template #heading>
            GitHub
          </template>

          <span class="text">
            https://github.com/bnichs
          </span>
        </WelcomeItem>
      </a>

    </div>

    <hr>
  </main>
</template>

<style>

.contact .text {
  /*margin: 0;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*transform: translateY(-60%);*/
}
.contact {
  list-style: none;
}

.contact i {
  font-size: 30px;
}

.contact a{
  font-size: 15px;
  display: block;
  line-height: 32px;
  margin-bottom: 20px;
  opacity: 0.6;


}


.contact a i {
  /*margin-right: 20px;*/
}
</style>
