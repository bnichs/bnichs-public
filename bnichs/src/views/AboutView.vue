<script setup lang="ts">
import AboutBox from '../components/AboutBox.vue'
import MainBox from '@/components/MainBox.vue'
</script>

<template>
  <MainBox>
    <template #title>
      About Me
    </template>
    <template #content>
      <AboutBox :extra="true"></AboutBox>
    </template>
  </MainBox>
</template>

<style>
</style>