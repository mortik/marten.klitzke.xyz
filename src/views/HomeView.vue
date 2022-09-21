<template>
  <div class="text-center flex-col flex items-center justify-center">
    <PageHeader>
      Freelance Software Developer
      <br />
      <small
        class="transition-colors duration-500 text-gray-500 dark:text-gray-400"
      >
        Sci-Fi and Tech Nerd
      </small>
    </PageHeader>
    <div
      class="flex items-center justify-center space-x-6 mt-10 sm:mt-40 py-6 transition-colors duration-500 border-t-slate-200 dark:border-t-slate-700 border-t sm:w-1/2"
    >
      <router-link
        :to="{ name: 'about' }"
        class="text-lg sm:text-2xl transition-colors duration-500 text-gray-500 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gray-500"
      >
        About
      </router-link>
      <span
        class="transition-colors duration-500 text-gray-300 dark:text-gray-400"
      >
        {{ " | " }}
      </span>
      <router-link
        :to="{ name: 'history' }"
        class="text-lg sm:text-2xl transition-colors duration-500 text-gray-500 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gray-500"
      >
        Project History
      </router-link>
      <!-- <span
        class="transition-colors duration-500 text-gray-300 dark:text-gray-400"
      >
        {{ " | " }}
      </span>
      <router-link
        :to="{ name: 'tools' }"
        class="text-lg sm:text-2xl transition-colors duration-500 text-gray-500 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gray-500"
      >
        Tools
      </router-link> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from "@/components/PageHeader.vue";
</script>
