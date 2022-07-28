<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
</script>

<template>
  <main>
    <h2>Services Provided</h2>

    <WelcomeItem>
      <template #icon>
<!--        <DocumentationIcon />-->
        <i class="bi bi-gear-wide-connected"></i>
      </template>
      <template #heading>
        Process Automation
      </template>
      Companies of all sizes face a common problem: people are made to do repetitive tasks that require little or no extra though or effort but take up their most valuable resource: time.
      These tasks can range from:
      <ul>
        <li>Manually deploying software</li>
        <li>Inputting sales data by hand</li>
        <li>Building capacity by hand</li>
        <li>Configuring servers and services by hand</li>
        <li>Oncall responses for repeat problems</li>
      </ul>

      No matter the task, it can be automated. Break the cycle of manual work and free your employees to do something they enjoy.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <i class="bi bi-hammer"></i>
      </template>
      <template #heading>
        Tooling
      </template>
      Whether it be a single tool meant to simplify your sales workflow or a full fledged service to encompass an entire work day, tooling is needed everywhere.

      No matter the task, it can be automated.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <i class="bi bi-house-heart-fill"></i>
      </template>
      <template #heading>
        Service Design / Architecture
      </template>
      No house is built without a blueprint (At least none that is still standing). Start from the ground up with a custom tailored service design to fit your business needs.

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

      No organization can survive without sharing knowledge. All of the services and skill provided here are easily transferable to teams via training.
    </WelcomeItem>
  </main>
</template>

<style>
</style>
