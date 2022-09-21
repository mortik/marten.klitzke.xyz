<template>
  <div>
    <div class="relative px-3">
      <div
        class="flex h-8 w-8 items-center justify-center rounded-full transition-all bg-gray-100 dark:bg-gray-700 ring-8 duration-500 ring-gray-50 dark:ring-slate-900"
      >
        <LightBulbIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
      </div>
    </div>
  </div>
  <div class="min-w-0 flex-1 py-1.5">
    <div class="text-sm text-gray-500 space-x-2">
      <span
        v-for="skill in skills"
        :key="skill"
        class="relative mb-2 inline-flex items-center rounded-full border transition-colors duration-500 dark:bg-slate-800 border-gray-300 dark:border-gray-600 px-3 py-0.5 text-sm"
      >
        <span
          class="font-medium transition-colors duration-500 text-gray-900 dark:text-gray-400"
        >
          {{ skill }}
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LightBulbIcon } from "@heroicons/vue/24/outline";

defineProps<{
  skills: string[];
}>();
</script>
