<script setup lang="ts">
import AboutBox from '../components/AboutBox.vue'
import BNLogo from '../components/BNLogo.vue'
import QrcodeVue from 'qrcode.vue'
</script>

<template>
  <main>


    <div class="bcard row">

      <div class="col">
        <BNLogo width="150" height="100"></BNLogo>
        <qrcode-vue class="qr-box" :value="value" :size="size" level="H" />
      </div>

      <div class="col">
        <div id="card-contact">
          contact shit
        </div>
      </div>
    </div>



  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: 'https://example.com',
      size: 55,
    }
  },
}
</script>


<style>
.bcard {
  margin: 4vh auto 0 auto;

  width: 3.5in;
  height: 2in;

  border: 1px solid green
}


.bcard .bn-logo {
  margin: .1in 0 0 .2in;
  width: fit-content;
  height: fit-content;
}


.qr-box {
  margin: .01in 0 0 .68in;
}


#card-contact{
  padding: 5px;
  margin: 5vh 0 1vh 0;
  border-left: 1px solid green;
  height: fit-content;
}
</style>
