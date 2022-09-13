<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-gray-100 dark:bg-slate-800 transition-colors duration-500">
    <div
      class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <router-link
          key="imprint"
          :to="{ name: 'imprint' }"
          class="text-gray-400 hover:text-gray-500"
        >
          Imprint
        </router-link>
        <a
          key="email"
          :href="`mailto:${profile.email}`"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Mail</span>
          <font-awesome-icon icon="fa-duotone fa-envelope" size="xl" />
        </a>
        <a
          v-for="link in profile.links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ link.name }}</span>
          <font-awesome-icon :icon="`fa-brands fa-${link.icon}`" size="xl" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-base text-gray-400">
          &copy; {{ new Date().getFullYear() }} {{ profile.name }} All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type { Profile } from "@/profile";

defineProps<{
  profile: Profile;
}>();
</script>
