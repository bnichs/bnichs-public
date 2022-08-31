<script setup lang="ts">
import ContactLinks from '../components/ContactLinks.vue'
import MainBox from '../components/MainBox.vue'
</script>

<template>
  <MainBox>
   <template #title>
     Contact Info
   </template>

    <template  #content>
      <div id="contactList">
        <ContactLinks>
        </ContactLinks>
      </div>
    </template>
  </MainBox>
</template>


<script lang="ts">
</script>

<style >


#contactList {
  font-size: .9em;
}

#contactList .contact h3{
  font-size: 1.9em;
}

#contactList .contact .text {
  font-size: 1.4em;
  /*margin: 0;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*transform: translateY(-60%);*/
}
#contactList .contact {
  list-style: none;
}

#contactList .contact i {
  font-size: 2.1em;
}

#contactList .contact a{
  /*font-size: 15px;*/
  display: block;
  /*line-height: 32px;*/
  margin-bottom: 20px;
  opacity: 0.9;
}


#contactList .contact .details{
  margin: 0 0 1vh 2em;
}

</style>
