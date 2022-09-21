<template>
  <PageLayout>
    <PageHeader title="History" backbutton />
    <div class="mt-12">
      <div class="border-b border-gray-200 dark:border-gray-600">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            :to="{ name: tab.to }"
            :class="[
              tab.current
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-600 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
            >{{ tab.name }}</router-link
          >
        </nav>
      </div>
    </div>
    <div class="flow-root mt-12">
      <router-view />
    </div>
  </PageLayout>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { routes as historyRoutes } from "@/views/history/routes";
import PageLayout from "@/layouts/PageLayout.vue";
import PageHeader from "@/components/PageHeader.vue";
import type { RouteRecordRaw } from "vue-router";

export type ProjectOrPosition = {
  type: "project" | "position";
  name: string;
  href: string;
  imageUrl: string;
  description: string;
  from: string;
  until?: string;
};

export type Skill = {
  type: "skill";
  skills: string[];
};

const route = useRoute();

const tabs = computed(() => {
  return historyRoutes.map((historyRoute: RouteRecordRaw) => {
    return {
      name: historyRoute.meta ? historyRoute.meta.title : "",
      to: historyRoute.name,
      current: historyRoute.name === route.name,
    };
  });
});
</script>
