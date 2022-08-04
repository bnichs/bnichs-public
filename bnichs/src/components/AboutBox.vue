<script setup lang="ts">
// import {MainBox} from './MainBox.vue'
</script>

<template>
  <div class="about">
    <p>
      I specialize in bringing enterprise development knowledge to small/medium sized businesses without the all the baggage that comes with it.
    </p>
    <p>I'm passionate about automation and building services that require less people. Nothing would make me sadder in the past than seeing talented developers spend their day clicking buttons doing repetitive tasks when they were really hired to solve interesting problems. So I've made automating those task my interesting problem.</p>

    <h4>Bio</h4>
    <p>
      I began my career as a self taught web developer working for small businesses to build out their homepages. From there I moved on into cloud computing at AWS where I specialized in networking and automation. To give you an idea, if you've ever connected to S3 using IPV6, I helped set that up including the provisioning automation and the addressing scheme. In fact if you've connected to S3 in the past few years, there's a good chance the load balance you went through was built using my software.
    </p>
    <p>
      From there I dipped my toes into security working for Oracle Cloud Infrastructure working as a Principal Engineer and again automating things like logging systems and threat detection systems.
    </p>
    <p>Following Oracle, I moved on to a solo career taking on small business clients and helping them automate their systems and helping devs to stop clicking buttons all day
    </p>

    <div v-if="extra" class="extraAbout">
      <h4>
        In my free time I enjoy:
      </h4>
      <ul>
        <li>Being in nature, preferably with my dog</li>
        <li>Reading: I love SciFi, existential fiction, and anything with a good twist.</li>
        <li>Writing: I enjoy writing fiction including a book I plan to release one day once things slow down and I can finally edit it.</li>
        <li>Travelling. I'd like to road trip through every state in the USA.</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

  props: {
    extra: {
      default: false,
      type: Boolean
    }
  },
})


// import {MainBox} from './MainBox.vue'
</script>

<style>
</style>
