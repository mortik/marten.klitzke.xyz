<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="bg-gray-800">
      <img
        class="h-32 w-full object-cover lg:h-96"
        :src="BackgroundImage"
        alt=""
      />

      <div class="absolute top-4 right-4">
        <Switch
          v-model="enabled"
          :class="[
            enabled
              ? 'bg-slate-900 ring-gray-500 hover:ring-gray-400'
              : 'bg-gray-200 ring-gray-400 hover:ring-gray-500',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-1  transition-all duration-300 ease-in-out focus:outline-none',
          ]"
        >
          <span class="sr-only">Use setting</span>
          <span
            :class="[
              enabled
                ? 'translate-x-5 bg-slate-700'
                : 'translate-x-0 bg-white ',
              'pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out',
            ]"
          >
            <span
              :class="[
                enabled
                  ? 'opacity-0 ease-out duration-100'
                  : 'opacity-100 ease-in duration-200',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
              ]"
              aria-hidden="true"
            >
              <SunIcon class="h-3 w-3 text-gray-400" />
            </span>
            <span
              :class="[
                enabled
                  ? 'opacity-100 ease-in duration-200'
                  : 'opacity-0 ease-out duration-100',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
              ]"
              aria-hidden="true"
            >
              <MoonIcon class="h-3 w-3 text-slate-400" />
            </span>
          </span>
        </Switch>
      </div>
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 flex items-end space-x-5">
        <div class="flex">
          <img
            class="transition-shadow z-50 duration-500 avatar h-24 w-24 rounded-full ring-4 ring-white dark:ring-slate-900 sm:h-32 sm:w-32"
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
import { ref, watch } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { Switch } from "@headlessui/vue";
import { useAppStore } from "@/stores/App";
import type { Profile } from "@/profile";
import BackgroundImage from "@/assets/images/background.jpg";

defineProps<{
  profile: Profile;
}>();

const appStore = useAppStore();

const enabled = ref(appStore.theme === "dark");
watch(enabled, () => {
  appStore.switchMode();
});
</script>
