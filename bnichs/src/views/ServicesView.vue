<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import MainBox from '../components/MainBox.vue'
</script>

<template>
  <MainBox>
    <template #title>
      Services Provided
    </template>
    <template #content>

      <WelcomeItem>
        <template #icon>
          <!--        <DocumentationIcon />-->
          <i class="bi bi-gear-wide-connected"></i>
        </template>
        <template #heading>
          Process Automation
        </template>
        <p>
          Companies of all sizes face a common problem: people are made to do repetitive tasks that require little or no extra thought or effort but take up their most valuable resource: time.
          These tasks can range from:
        </p>
        <ul>
          <li>Manually deploying software</li>
          <li>Inputting sales data by hand</li>
          <li>Building capacity by hand</li>
          <li>Configuring servers and services by hand</li>
          <li>Oncall responses for repeat problems</li>
        </ul>
        <p>
          I specialize in taking manual processes and human-based systems and turning them into well oiled, configuration driven machines.
        </p>
        <p>
          No matter the task, it can be automated. Break the cycle of manual work and free your employees to do more important work.
        </p>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <i class="bi bi-hammer"></i>
        </template>
        <template #heading>
          Tooling
        </template>
        <p>
          Whether it be a single tool meant to simplify your sales workflow or a full fledged service to encompass an entire work day, tooling is needed everywhere. Not only does it simplify the work being done, but tooling provides a full-view into actions being made and allows for version-control to keep things in check.
        </p>
        <p>
          In previous jobs the rule of thumb has been if any task have three or more steps and needs to be done three or more times, there should be a tool to do it. Replace complicated runbooks with dedicated and precise tooling.
        </p>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <i class="bi bi-house-heart-fill"></i>
        </template>
        <template #heading>
          Service Design / Architecture
        </template>
        <p>
        No house is built without a blueprint (at least none that is still standing). Start from the ground up with a custom tailored service design to fit your business needs.
        </p>
        <p>
         Services include:
        </p>
        <ul>
          <li>Network design</li>
          <li>Deployment architecture</li>
          <li>Service design</li>
          <li>Cost minimization</li>
        </ul>

      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <i class="bi bi-card-checklist"></i>
        </template>
        <template #heading>
          Operational Planning
        </template>

        All businesses have operational needs. Whether it be responding to customer emails or waking up at 3am to fix the database.
        Leverage my experience in frantic operational environments to make sure your business can handle anything that gets thrown at it.

      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <i class="bi bi-book"></i>
        </template>
        <template #heading>
          Training
        </template>
        <p>
        No organization can survive without sharing knowledge. All of the services and skill provided here are easily transferable to teams via training and documentation.
        </p>
      </WelcomeItem>


      <p class="closer">
        If you're interested in any of these services or seeing what can be done to improve your business, <RouterLink to="/contact">reach out for a consultation. </RouterLink>
      </p>
    </template>
  </MainBox>
</template>

<style>

.closer {
  margin: 18vh 0 0 0;
}
</style>
