<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import QRCode from '../components/QRCode.vue'
import ContactLinks from '../components/ContactLinks.vue'

import {PERSON_NAME, PERSON_SUBTITLE} from "@/config";
</script>

<template>
    <div id="bcard2">

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
--card-width: 3.5in;
--card-height: 2in;
--left-width: calc(var(--card-width) *.55);
--right-width: calc(var(--card-width) *.45);

--gutter: .2in;
--card-border: 1px solid green;

}


#bcard2 {
  margin: 4vh auto 10vh auto;

  width: var(--card-width);
  height: var(--card-height);

  border: var(--card-border);
  display: grid;

}


#bcard2 #card-left{
  padding: 0px;
  grid-column: 1;
  width: var(--left-width);
  background-color: var(--color-heading-bg);
}


#bcard2 .bn-logo {
  text-align: center;
  width: var(--left-width);
  height: 1.0in;
}

#bcard2 #logoImg {
  width: 1.5in;
  height: 0.7in;
  margin: .2in 0 .2in 0;
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
  padding: var(--gutter) var(--gutter) 0 calc(var(--gutter)*1.0);
  text-align: center;
}

#bcard2 #card-title h3 {
  font-size: .20in;
  color: var(--color-title)
}

#bcard2 #card-title h5 {
  font-size: .1in;
  color: var(--color-subtitle)
}

#bcard2 #card-contact{
  padding: var(--gutter) 0 0 calc(var(--gutter)*1.5);
  margin: 0 0 0 0 ;
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
}


@media print {
  header, footer {
    display: none !important;
  }
}
</style>
