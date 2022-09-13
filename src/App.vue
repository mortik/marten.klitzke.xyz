<template>
  <div class="min-h-screen">
    <MainHeader :profile="profile" />

    <div class="relative pt-6 pb-16 sm:pb-24">
      <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <router-view :key="String(route.name)" v-slot="{ Component }">
          <transition name="fade" mode="out-in" :appear="true">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>

  <AppFooter :profile="profile" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAppStore } from "./stores/App";
import MainHeader from "./components/MainHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import profile from "./profile";

const route = useRoute();

const appStore = useAppStore();
appStore.$subscribe((_mutation, state) => {
  appStore.setTheme(state.theme);
});

appStore.setTheme(appStore.theme);
</script>
