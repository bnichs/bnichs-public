<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import AboutBox from '@/components/AboutBox.vue'
import MainBox from '../components/MainBox.vue'
</script>

<template>

  <MainBox>
    <template #title>
      Home
    </template>
    <template #content>
      <AboutBox></AboutBox>
      <TheWelcome />
    </template>
  </MainBox>
</template>
