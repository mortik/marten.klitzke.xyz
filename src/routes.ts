import type { RouteRecordRaw } from "vue-router";
import HomeView from "./views/HomeView.vue";
import { routes as historyRoutes } from "@/views/history/routes";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about/",
    name: "about",
    component: () => import("./views/AboutView.vue"),
  },
  {
    path: "/history/",
    name: "history",
    component: () => import("./views/HistoryView.vue"),
    children: historyRoutes,
    redirect: {
      name: "history-companies",
    },
  },
  {
    path: "/tools/",
    name: "tools",
    component: () => import("./views/ToolsView.vue"),
  },
  {
    path: "/imprint/",
    name: "imprint",
    component: () => import("./views/ImprintView.vue"),
  },
  {
    path: "/404/",
    name: "404",
    component: () => import("./views/NotFoundView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./views/NotFoundView.vue"),
  },
];

export default routes;
