<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import QRCode from '../components/QRCode.vue'
import ContactLinks from '../components/ContactLinks.vue'

import {PERSON_NAME, PERSON_SUBTITLE} from "@/config";
</script>

<template>
  <div class="cardWrapper">

    <div id="bcard2">
      <div id="safeLeft">

      </div>
      <div id="cardSafe">
        <div id="card-left">
          <BNLogo width="150" height="100"></BNLogo>

          <div id="card-title">
            <h3>
              {{ PERSON_NAME }}
            </h3>

            <h5>
              {{ PERSON_SUBTITLE }}
            </h5>
          </div>
        </div>
        <div id="card-right">
          <div id="card-contact">
            <ContactLinks :showLinkedin="false" :showCard="false" :showGitHub="false">
            </ContactLinks>
          </div>

          <div class="qr-wrapper">
            <QRCode></QRCode>
          </div>
        </div>

      </div>
    </div>
  </div>
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
* {
  transition: none !important;
}


:root{
--safe-card-width: 3.75in;
--safe-card-height: 2.25in;
--card-width: 3.25in;
--card-height: 1.75in;
--card-dh: calc(var(--safe-card-height) - var(--card-height));
--card-dw: calc(var(--safe-card-width) - var(--card-width));

--left-pct: .45;
--right-pct: calc(1 - var(--left-pct));

--left-width: calc(var(--card-width) * var(--left-pct));
--right-width: calc(var(--card-width) * var(--right-pct));

--left-safe-width: calc(var(--left-width) + var(--card-dw)/2 + 1px);

--gutter: .2in;
--card-border: 1px dashed black;

}

.cardWrapper {
  margin: 4vh auto 10vh auto;
  border: var(--card-border);
  width: fit-content;
  height: fit-content;
}

#safeLeft {
  width: var(--left-safe-width);
  height: var(--safe-card-height);
  background-color: var(--color-heading-bg);
  z-index: 0
}


#bcard2 {
  z-index: 2;
  width: var(--safe-card-width);
  height: var(--safe-card-height);


  font-family: "Open Sans", sans-serif;

}


#cardSafe {
  width: var(--card-width);
  height: var(--card-height);
  border: var(--card-border);
  display: grid;
  margin: calc(var(--card-dh)/2) auto auto auto;

  position: absolute;
  top: 0;
  left: calc(var(--card-dw)/2);
}


#bcard2 #card-left{
  padding: 0px;
  grid-column: 1;
  width: var(--left-width);
  background-color: var(--color-heading-bg);
  height: fit-content;
}


#bcard2 .bn-logo {
  text-align: center;
  width: var(--left-width);
  /*height: 1.0in;*/
  /*padding-top: .08in;*/
}

#bcard2 #logoImg {
  width: 1.2in;
  /*height: 0.6in;*/
  margin: .15in 0 .1in 0;
}


#bcard2 .qr-wrapper{
  text-align: center;
  margin: .1in 0 0 0in;
}

#bcard2 #qr-box {
  /*margin: .01in .1in 0 .25in;*/
  width: .6in !important;
  height: .6in !important;
}


#bcard2 #card-right{
  width: var(--right-width);
  grid-column: 2;
}

#bcard2 #card-title{
  /*padding: calc(var(--gutter)*.5) var(--gutter) 0 calc(var(--gutter)*1.0);*/
  padding: .2in 0 0 0;
  text-align: center;
}

#bcard2 #card-title h3 {
  font-size: .20in;
  color: var(--color-title)
}

#bcard2 #card-title h5 {
  font-size: .1in;
  color: var(--color-subtitle);
  margin: .1in auto auto auto;
}

#bcard2 #card-contact{
  padding: calc(var(--gutter)*.7) calc(var(--gutter)*0) 0 calc(var(--gutter)*1.5);
  margin: 0 0 0 0 ;
  line-height: 1.0;
}


#bcard2 .contact{
  width: fit-content;
  margin: 0 0 0in 0;
}


#bcard2 .contact a {
 margin: 0;
}

#bcard2 .contact i {
  font-size: .15in;
  padding: 0px;
  width: unset;
  height: unset;
  left: -.15in;
}

#bcard2 .contact .details {
  margin: 0 0px .1in 0;
}


#bcard2 .contact h3{
  font-size: .12in;
  margin: 0px;
}

#bcard2 .contact .item {
  padding: 0 0 0 0vh;
  margin: 0;
}

#bcard2 .contact .text{
  font-size: .1in;
  font-weight: bold;
}


.printMode #cardSafe{
  border: none
}


@media print {
  header, footer {
    display: none !important;
  }

  #cardSafe {
    border: none
  }
}



</style>
