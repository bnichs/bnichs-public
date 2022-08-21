<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import BCard1 from '../components/BCard1.vue'
import BCard2 from '../components/BCard2.vue'
import MainBox from '@/components/MainBox.vue'
import ContactLinks from '../components/ContactLinks.vue'
import QrcodeVue from 'qrcode.vue'

import {PERSON_NAME, PERSON_SUBTITLE} from "@/config";
</script>

<template>
  <MainBox>
    <template #title>
      Business Card
    </template>
    <template #content>

      <BCard1>
      </BCard1>

      <br><br>

      <BCard2>
      </BCard2>
    </template>
  </MainBox>
</template>

<script lang="ts">
import {PERSON_WEBSITE} from "@/config";

export default {
  data() {
    return {
      value: PERSON_WEBSITE,
      size: 55,
    }
  },
}
</script>


<style>
</style>
