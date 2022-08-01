<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import ContactLinks from '../components/ContactLinks.vue'
import QrcodeVue from 'qrcode.vue'

import {PERSON_NAME, PERSON_SUBTITLE} from "@/config";
</script>

<template>
  <main>
    <div class="bcard row">

      <div id="card-left" class="col">
        <BNLogo width="150" height="100"></BNLogo>
        <qrcode-vue class="qr-box" :value="value" :size="size" level="H" />
      </div>

      <div id="card-right" class="col">
        <div id="card-contact">
          <ContactLinks :showLinkedin="false" :showCard="false" :showGitHub="false">
          </ContactLinks>
        </div>
        <div id="card-title">
          <h3>
            {{ PERSON_NAME }}
          </h3>

          <h5>
            {{ PERSON_SUBTITLE }}
          </h5>
        </div>
      </div>
    </div>
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
.bcard {
  margin: 4vh auto 0 auto;

  width: 3.5in;
  height: 2in;

  border: 1px solid green
}


#card-left{
  padding: 0px;
}


.bcard .bn-logo {
  margin: .05in 0 0 .1in;
  width: fit-content;
  height: fit-content;
}


.qr-box {
  margin: .01in 0 0 .55in;
}


#card-right{
  padding: .1in 0 0 .2in;
  border-left: 1px solid green;
}

#card-title{
  border-top: 1px solid green;
  padding: .1in 0 0 .2in;
  margin: 0 0 0 -.2in;
  height: 40%;
}

#card-title h3 {
  font-size: .20in;
}

#card-title h5 {
  font-size: .1in;
}

#card-contact{
  padding: .05in;
  margin: 0 0 0 0 ;
  /*border-left: 1px solid green;*/
  height: 60%;
  /*width: 110px;*/
}


.bcard .contact{
  width: fit-content;
  margin: 0 0 0in 0;
}


.bcard .contact a {
 margin: 0;
}

.bcard .contact i {
  font-size: .15in;
  padding: 0px;
  width: unset;
  height: unset;
  left: -.15in;
}

.bcard .contact .details {
  margin: 0 0px 5px 0;
}


.bcard .contact h3{
  font-size: .12in;
  margin: 0px;
}

.bcard .contact .item {
  padding: 0 0 0 0vh;
  margin: 0;
}

.bcard .contact .text{
  font-size: .08in;
}


@media print {
  header, footer {
    display: none !important;
  }
}
</style>
