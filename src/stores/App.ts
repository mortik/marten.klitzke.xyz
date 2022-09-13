import { ref } from "vue";
import { defineStore } from "pinia";

export type ThemeMode = "light" | "dark";

export const useAppStore = defineStore(
  "App",
  () => {
    const theme = ref<ThemeMode>("dark");

    const switchMode = () => {
      theme.value = theme.value === "dark" ? "light" : "dark";
    };

    const setTheme = (theme: ThemeMode) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    return { theme, switchMode, setTheme };
  },
  { persist: true }
);
