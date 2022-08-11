<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import ContactLinks from '../components/ContactLinks.vue'
import QrcodeVue from 'qrcode.vue'

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
          <qrcode-vue id="qr-box" :value="value" :size="size" level="H" />
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
      size: "55",
    }
  },
}
</script>


<style>
* {
  transition: none !important;
}


/*@media (prefers-color-scheme: light){*/
/*  :root {*/
/*    --color-background: var(--vt-c-white);*/
/*    --color-background-soft: var(--vt-c-white-soft);*/
/*    --color-background-mute: var(--vt-c-white-mute);*/

/*    --color-border: var(--vt-c-divider-light-2);*/
/*    --color-border-hover: var(--vt-c-divider-light-1);*/

/*    --color-heading: var(--vt-c-text-light-1);*/
/*    --color-text: var(--vt-c-text-light-1);*/

/*    --section-gap: 160px;*/
/*  }*/
/*}*/

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

  background-color: white;
  /*color: black;*/
}


#bcard2 #card-left{
  padding: 0px;
  /*width: 40%;*/
  grid-column: 1;
  width: var(--left-width);
}


#bcard2 .bn-logo {
  /*margin: .05in 0 0 .1in;*/
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
}

#bcard2 #qr-box {
  /*margin: .01in .1in 0 .25in;*/
  width: .6in !important;
  height: .6in !important;
}


#bcard2 #card-right{
  /*padding: .1in 0 0 .2in;*/
  /*border-left: var(--card-border);*/
  /*float: left;*/
  width: var(--right-width);
  grid-column: 2;
}

#bcard2 #card-title{
  /*border-top: var(--card-border);*/
  padding: var(--gutter) var(--gutter) 0 calc(var(--gutter)*2);
  /*margin: 0 0 0 -.2in;*/
  /*height: 40%;*/
}

#bcard2 #card-title h3 {
  font-size: .20in;
}

#bcard2 #card-title h5 {
  font-size: .1in;
}

#bcard2 #card-contact{
  padding: var(--gutter) 0 0 calc(var(--gutter)*1.5);
  margin: 0 0 0 0 ;
  /*border-left: 1px solid green;*/
  /*height: 60%;*/
  /*width: 110px;*/
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
