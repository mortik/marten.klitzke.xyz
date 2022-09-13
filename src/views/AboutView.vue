<template>
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-prose text-lg">
      <BackButton />
      <h1
        class="text-center text-3xl transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-4xl md:text-5xl"
      >
        About me
      </h1>
      <p class="mt-8 text-xl leading-8 text-gray-500 dark:text-gray-300">
        My name is Marten Klitzke and I live in Wedel, a small town on the
        doorstep of Hamburg in Northern Germany with my wife and my two kids.
        I'm a freelance software developer with a passion for building modern
        scalable web applications.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BackButton from "@/components/BackButton.vue";
</script>
