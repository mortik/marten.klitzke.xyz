<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div>
      <img
        class="h-32 w-full object-cover lg:h-96"
        :src="profile.backgroundImage"
        alt=""
      />

      <div class="absolute top-4 right-4">
        <button type="button" @click="switchTheme">
          <transition name="fade">
            <component :is="themeIcon" class="text-gray-500 h-6 w-6" />
          </transition>
        </button>
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 flex items-end space-x-5">
        <div class="flex">
          <img
            class="transition-shadow duration-500 avatar h-24 w-24 rounded-full ring-4 ring-white dark:ring-slate-900 sm:h-32 sm:w-32"
            :src="profile.avatar"
            alt=""
          />
        </div>
        <div
          class="mt-6 sm:flex min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
        >
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1
              class="truncate text-2xl text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
            >
              <router-link :to="{ name: 'home' }" class="">{{
                profile.name
              }}</router-link>
            </h1>
          </div>
          <div
            class="hidden justify-stretch mt-6 sm:flex flex-row space-y-0 space-x-4"
          >
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
              <font-awesome-icon
                :icon="`fa-brands fa-${link.icon}`"
                size="xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useAppStore } from "@/stores/App";
import type { Profile } from "@/profile";

defineProps<{
  profile: Profile;
}>();

const appStore = useAppStore();

const themeIcon = computed(() => {
  if (appStore.theme === "dark") {
    return SunIcon;
  }
  return MoonIcon;
});

const switchTheme = () => {
  appStore.switchMode();
};
</script>
