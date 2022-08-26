<script setup lang="ts">
import BNLogo from '../components/BNLogo.vue'
import QRCode from '../components/QRCode.vue'
import ContactLinks from '../components/ContactLinks.vue'

import {PERSON_NAME, PERSON_SUBTITLE, PERSON_OBJECTIVE} from "@/config";
</script>

<template>
  <button class="gridButton" @click="setGrid">
    Toggle grid
  </button>

<!--  <button class="gridButton" @click="setSafe">-->
<!--    Toggle safe-->
<!--  </button>-->
  <div class="cardWrapper">

    <div id="bcard2">
      <div id="safeLeft">
      </div>
      <div id="safeLeft2">
      </div>
      <div v-if="grid" id="thirds">
        <div v-for="i in 9">

        </div>
      </div>
      <div id="cardSafe">
        <div id="card-left">
          <BNLogo width="150" height="100"></BNLogo>

          <div id="card-title">
            <h3 class="person-name">
              {{ PERSON_NAME }}
            </h3>

            <h5 class="person-subtitle">
              {{ PERSON_SUBTITLE }}
            </h5>
            <h5 class="person-objective">
              {{ PERSON_OBJECTIVE }}
            </h5>
            <ul class="person-goals">
              <li>
                Consulting
              </li>
              <li>
                ○
              </li>
              <li>
                Contracting
              </li>
            </ul>
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
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      value: PERSON_WEBSITE,
      size: 55,
      grid: false,
      safe: true,
    }
  },
  methods:{
    setGrid(){
      this.grid = ! this.grid
    },
    // setSafe(){
    //   this.safe = ! this.safe
    // }
  }
})
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
--card-border: 1px dashed green;


--corner-radius: 20px

}

.cardWrapper {
  margin: 4vh auto 10vh auto;
  border: var(--card-border);
  width: fit-content;
  height: fit-content;
}

#safeLeft {
  width: calc(var(--left-safe-width) - 1px);
  height: calc(var(--card-dh)/2 + var(--card-height) - var(--corner-radius));
  background-color: var(--color-heading-bg);
  z-index: 0;
  border: none;
}

#safeLeft2 {
  width: calc(var(--left-safe-width) - var(--corner-radius));
  height: calc(var(--corner-radius) + var(--card-dh)/2);
  background-color: var(--color-heading-bg);
  z-index: 0;
  border: none;
  padding: 0px;
  margin: 0px;
}


#thirds {
  width: var(--card-width);
  height: var(--card-height);
  /*background-color: blue;*/
  z-index: 5;
  border: none;
  padding: 0px;
  margin: 0px;
  top: calc(var(--card-dh)/2);
  left: calc(var(--card-dw)/2);
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#thirds div {
  border: 1px solid black;
  /*width: 33%;*/
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
  height: calc(var(--card-height) - 1px);
  background-color: var(--color-heading-bg);
  /*height: fit-content;*/
  border-radius: 0 0 var(--corner-radius) 0;
  /*text-align: center;*/
}


#bcard2 .bn-logo {
  text-align: center;
  width: var(--left-width);
  /*height: 1.0in;*/
  /*padding-top: .08in;*/
}

#bcard2 #logoImg {
  width: .9in;
  height: 0.35in;
  margin: .15in 0 0in 0;
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
  padding: .17in 0 0 0;
  text-align: center;
}

#bcard2 #card-title .person-name {
  font-size: .18in;
  font-weight: bold;
  color: var(--color-title);
  margin: 0px;
}

#bcard2 #card-title .person-subtitle {
  font-size: .07in;
  color: var(--color-subtitle);
  color: var(--vt-c-text-dark-2);
}


#bcard2 #card-title .person-objective {
  font-size: .1in;
  color: var(--color-subtitle);
  margin: .25in auto auto auto;
}


#bcard2 .person-goals {
  font-size: .08in;
  /*margin: 0px;*/
  padding: 0px;
  margin: .03in auto 0 auto;
  color: var(--vt-c-text-dark-2);
  display: flex;
  justify-content: center;
  align-items: center;
}

#bcard2 .person-goals li{
  list-style: outside none none;
  float: left;
  width: auto;
  padding: 0 4px 0 4px;
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
  padding: 2px 0 0 0vh;
  margin: 0;
}

#bcard2 .contact .text{
  font-size: .1in;
  font-weight: bold;
}


.printMode #cardSafe{
  border: none
}

.printMode #thirds {
  display: none;
}


@media print {
  body {
    margin: 0px 0px 0px 0px;
  }

  html, body {
    height: 99%;
  }


  .pageTitle, .pageTitleLine, .saveButton {
    display: none;
  }
  header, footer {
    display: none !important;
  }

  #cardSafe {
    border: none
  }
}



</style>
