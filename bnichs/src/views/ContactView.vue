<script setup lang="ts">
import ContactLinks from '../components/ContactLinks.vue'
import MainBox from '../components/MainBox.vue'
</script>

<template>
  <MainBox>
   <template #title>
     Contact Info
   </template>

    <template #content>
      <ContactLinks>
      </ContactLinks>
    </template>
  </MainBox>
</template>


<script lang="ts">
</script>

<style>

.contact h3{
  font-size: 20px;
}

.contact .text {
  font-size: 15px;
  /*margin: 0;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*transform: translateY(-60%);*/
}
.contact {
  list-style: none;
}

.contact i {
  font-size: 30px;
}

.contact a{
  font-size: 15px;
  display: block;
  line-height: 32px;
  margin-bottom: 20px;
  opacity: 0.9;
}


.contact .details{
  margin: 0 0 1vh 1vw;
}

.contact .text {
  font-size: 15px;
}

.contact h3{
  font-size: 20px;
}


.contact a i {
  /*margin-right: 20px;*/
}
</style>
