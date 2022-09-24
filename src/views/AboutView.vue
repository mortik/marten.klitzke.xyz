<template>
  <PageLayout>
    <PageHeader title="About me" backbutton />
    <p class="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
      My name is Marten Klitzke and I live in Wedel, a small town on the
      doorstep of Hamburg in Northern Germany with my wife and my two kids.
    </p>
    <p class="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
      I'm a freelance software developer with a passion for modern scalable web
      applications.
    </p>
    <p class="text-xl leading-8 text-gray-500 dark:text-gray-300">
      I'm a big fan of Vue.js and the ecosystem around it. Building Progress Web
      Apps with Vue.js backed with an OpenAPI/JSONSchema or GraphQL API build
      with Ruby on Rails is a lot of fun and allows fast iterations.
      <br />
      Using modern CSS Frameworks like Twitter Bootstrap or TailwindCSS makes it
      even faster to build responsive web applications.
    </p>
    <p class="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
      Frameworks and libraries are only one side to get things done. I'm also
      very passionate about agile software development and continuous
      integration and delivery (CI/CD). Helping teams to improve and focus on
      what really matters through automation and continuous improvements of
      workflows and processes is something i really enjoy.
    </p>
    <p class="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
      DevOps is also a very important part of my work. I'm a big fan of Docker
      and Kubernetes, using tools like pulumni, helm, terraform or ansible to
      write infrastructure as code.
    </p>
    <p class="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
      In my freetime i like to spent time with my family, playing Star Citizen
      or working on one of my open source projects Fleetyards.net or
      Reckoning.me.
    </p>
  </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from "@/layouts/PageLayout.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>
