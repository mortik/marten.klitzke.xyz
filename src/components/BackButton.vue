<template>
  <button
    @click="back"
    class="absolute transition-all duration-500 text-gray-500 hover:text-gray-300 ring-gray-500 hover:ring-gray-300 dark:text-gray-100 hover:dark:text-gray-500 rounded-full p-2 ring-1 dark:ring-gray-100 dark:hover:ring-gray-500"
  >
    <span class="sr-only">Back</span>
    <ChevronLeftIcon class="h-6 w-6" />
  </button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";

const router = useRouter();

const back = () => {
  router.push("/");
};
</script>
