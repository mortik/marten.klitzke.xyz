<template>
  <BackButton v-if="backbutton" />
  <h1
    class="text-center text-3xl transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-4xl md:text-5xl"
  >
    <slot>
      {{ title }}
    </slot>
  </h1>
</template>

<script lang="ts" setup>
import BackButton from "@/components/BackButton.vue";

withDefaults(
  defineProps<{
    title?: string;
    backbutton?: boolean;
  }>(),
  {
    backbutton: false,
  }
);
</script>
