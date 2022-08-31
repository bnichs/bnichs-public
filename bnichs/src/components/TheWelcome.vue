<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <div class="welcome-items">
    <RouterLink to="/services">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-bricks"></i>
        </template>
        <template #heading>Services</template>
        See the wide array of services that I can bring to your business.
      </WelcomeItem>
    </RouterLink>

    <RouterLink to="/contact">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-telephone"></i>
        </template>
        <template #heading>Contact</template>
        Connect with me
      </WelcomeItem>
    </RouterLink>


    <RouterLink to="/resume">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-file-earmark-person"></i>
        </template>
        <template #heading>Resume</template>
        See my official resume with past employers and skills
      </WelcomeItem>
    </RouterLink>


  </div>
</template>


<style scoped>
/*.welcome-items {*/
/*  margin: 5vh 0 0 0*/
/*}*/

.welcome-items a {
  display: block;
}
</style>
