<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import BCard1 from '../components/BCard1.vue'
import BCard2 from '../components/BCard2.vue'
import ContactLinks from '../components/ContactLinks.vue'
import QrcodeVue from 'qrcode.vue'

import {PERSON_NAME, PERSON_SUBTITLE} from "@/config";
</script>

<template>
  <main>
    <BCard1>
    </BCard1>

    <br><br>

    <BCard2>
    </BCard2>
  </main>
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
/*.bcard2 {*/
/*  margin: 4vh auto 0 auto;*/

/*  width: 3.5in;*/
/*  height: 2in;*/

/*  border: 1px solid green*/
/*}*/


/*#card-left{*/
/*  padding: 0px;*/
/*}*/


/*.bcard2 .bn-logo {*/
/*  margin: .05in 0 0 .1in;*/
/*  width: fit-content;*/
/*  height: fit-content;*/
/*}*/

/*.bcard2 #logoImg {*/
/*  width: 1.5in;*/
/*  margin: .2in 0 .2in 0;*/
/*}*/


/*.qr-box {*/
/*  margin: .01in 0 0 .55in;*/
/*}*/


/*#card-right{*/
/*  padding: .1in 0 0 .2in;*/
/*  border-left: 1px solid green;*/
/*}*/

/*#card-title{*/
/*  border-top: 1px solid green;*/
/*  padding: .1in 0 0 .2in;*/
/*  margin: 0 0 0 -.2in;*/
/*  height: 40%;*/
/*}*/

/*#card-title h3 {*/
/*  font-size: .20in;*/
/*}*/

/*#card-title h5 {*/
/*  font-size: .1in;*/
/*}*/

/*#card-contact{*/
/*  padding: .05in;*/
/*  margin: 0 0 0 0 ;*/
/*  !*border-left: 1px solid green;*!*/
/*  height: 60%;*/
/*  !*width: 110px;*!*/
/*}*/


/*.bcard2 .contact{*/
/*  width: fit-content;*/
/*  margin: 0 0 0in 0;*/
/*}*/


/*.bcard2 .contact a {*/
/* margin: 0;*/
/*}*/

/*.bcard2 .contact i {*/
/*  font-size: .15in;*/
/*  padding: 0px;*/
/*  width: unset;*/
/*  height: unset;*/
/*  left: -.15in;*/
/*}*/

/*.bcard2 .contact .details {*/
/*  margin: 0 0px 5px 0;*/
/*}*/


/*.bcard2 .contact h3{*/
/*  font-size: .12in;*/
/*  margin: 0px;*/
/*}*/

/*.bcard2 .contact .item {*/
/*  padding: 0 0 0 0vh;*/
/*  margin: 0;*/
/*}*/

/*.bcard2 .contact .text{*/
/*  font-size: .08in;*/
/*}*/


/*@media print {*/
/*  header, footer {*/
/*    display: none !important;*/
/*  }*/
/*}*/
</style>
