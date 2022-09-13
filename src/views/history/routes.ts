import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "companies/",
    name: "history-companies",
    component: () => import("@/views/history/CompaniesView.vue"),
    meta: {
      title: "Companies",
    },
  },
  {
    path: "projects/",
    name: "history-projects",
    component: () => import("@/views/history/ProjectsView.vue"),
    meta: {
      title: "Projects",
    },
  },
];
