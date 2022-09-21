<template>
  <div class="relative">
    <img
      class="flex h-14 w-14 items-center justify-center rounded-full dark:bg-slate-900 bg-gray-50 ring-8 transition-all duration-500 ring-gray-50 dark:ring-slate-900"
      :src="item.imageUrl"
      alt=""
    />
  </div>
  <div class="min-w-0 flex-1">
    <div>
      <div class="text-sm">
        <a
          :href="item.href"
          target="_blank"
          class="font-medium transition-colors duration-500 text-gray-900 dark:text-gray-100"
          >{{ item.name }}</a
        >
      </div>
      <p
        class="mt-0.5 text-sm transition-colors duration-500 text-gray-500 dark:text-gray-400"
      >
        From {{ item.from }} -
        {{ item.until ? item.until : "Present" }}
      </p>
    </div>
    <div
      class="mt-2 text-sm transition-colors duration-500 text-gray-700 dark:text-gray-200"
    >
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectOrPosition } from "@/views/HistoryView.vue";

defineProps<{
  item: ProjectOrPosition;
}>();
</script>
