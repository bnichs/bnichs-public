<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <div v-if="showEmail" class="contact">
    <a href="mailto:mail@ben-nichols.net" target="_blank">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-envelope"></i>
        </template>
        <template #heading>
          Email
        </template>

        <span class="text">
            mail@ben-nichols.net
          </span>
      </WelcomeItem>
    </a>
  </div>

  <div v-if="showLinkedin" class="contact">
    <a href="https://www.linkedin.com/in/ben-j-nichols/" target="_blank">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-linkedin"></i>
        </template>
        <template #heading>
          LinkedIn
        </template>

        <span class="text">
            https://www.linkedin.com/in/ben-j-nichols/
          </span>

      </WelcomeItem>
    </a>
  </div>

  <div v-if="showGitHub" class="contact">
    <a href="https://github.com/bnichs" target="_blank">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-github"></i>
        </template>
        <template #heading>
          GitHub
        </template>

        <span class="text">
            https://github.com/bnichs
          </span>
      </WelcomeItem>
    </a>
  </div>

  <div v-if="showWebsite" class="contact">
    <a :href="websiteAddress" target="_blank">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-globe"></i>
        </template>
        <template #heading>
          Website
        </template>

        <span class="text">
            {{ websiteAddress }}
          </span>
      </WelcomeItem>
    </a>
  </div>

  <div v-if="showCard" class="contact">
    <RouterLink to="/card">
      <WelcomeItem>
        <template #icon>
          <i class="bi bi-postcard"></i>
        </template>
        <template #heading>
          My Card
        </template>

        <span class="text">
            foo
          </span>
      </WelcomeItem>
    </RouterLink>
  </div>


</template>


<script lang="ts">
import {PERSON_WEBSITE} from "@/config";

export default {
  data() {
    return {
      websiteAddress: PERSON_WEBSITE,
      size: 30,
    }
  },
  props: {
    showCard: {
      type: Boolean,
      default: true
    },
    showEmail: {
      type: Boolean,
      default: true
    },
    showWebsite: {
      type: Boolean,
      default: true
    },
    showGitHub: {
      type: Boolean,
      default: true
    },
    showLinkedin: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style scoped>

.contact i{
  color: var(--color-text);
}
</style>
