<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
</script>

<template>
    <qrcode-vue class="qr-box" :value="value" :size="size" level="H" />
</template>

<script lang="ts">
import {PERSON_WEBSITE} from "@/config";

export default {
  props: {
    size: {
      type: Number,
      default: 55
    }
  },
  data() {
    return {
      value: PERSON_WEBSITE,
      // size: 55,
    }
  },
}
</script>


<style>
</style>
