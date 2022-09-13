<template>
  <div class="relative">
    <img
      class="flex h-14 w-14 items-center justify-center rounded-full dark:bg-slate-900 bg-gray-50 ring-8 transition-all duration-500 ring-gray-50 dark:ring-slate-900"
      :src="props.item.imageUrl"
      alt=""
    />
  </div>
  <div class="min-w-0 flex-1">
    <div>
      <div class="text-sm">
        <a
          :href="props.item.href"
          target="_blank"
          class="font-medium transition-colors duration-500 text-gray-900 dark:text-gray-100"
          >{{ props.item.name }}</a
        >
      </div>
      <p
        class="mt-0.5 text-sm transition-colors duration-500 text-gray-500 dark:text-gray-400"
      >
        From {{ props.item.from }} -
        {{ props.item.until ? props.item.until : "Present" }}
      </p>
    </div>
    <div
      class="mt-2 text-sm transition-colors duration-500 text-gray-700 dark:text-gray-200"
    >
      <p>{{ props.item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectOrPosition } from "@/views/HistoryView.vue";

export interface Props {
  item: ProjectOrPosition;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
