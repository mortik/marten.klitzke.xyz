import { createRouter, createWebHistory } from "vue-router";
import type {
  RouteRecordRaw,
  RouteLocation,
  RouteLocationRaw,
} from "vue-router";
import initialRoutes from "@/routes";

const addTrailingSlashToAllRoutes = (
  routes: RouteRecordRaw[]
): RouteRecordRaw[] =>
  routes
    .map((route: RouteRecordRaw): RouteRecordRaw[] => {
      if (["*", "/"].includes(route.path)) {
        return [route];
      }

      const path: string = route.path.replace(/\/$/, "");

      const modifiedRoute: RouteRecordRaw = {
        ...route,
        path: `${path}/`,
      };

      if (route.children && route.children.length > 0) {
        modifiedRoute.children = addTrailingSlashToAllRoutes(route.children);
      }

      return [
        modifiedRoute,
        {
          path,
          redirect: (to: RouteLocation): RouteLocationRaw => {
            return {
              name: route.name,
              params: to.params || null,
              query: to.query || null,
            };
          },
        },
      ];
    })
    .flat();

const router = createRouter({
  strict: true,
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "active-exact",
  routes: addTrailingSlashToAllRoutes(initialRoutes),
  scrollBehavior: (to, _from, savedPosition) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve(false);
        } else if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ left: 0, top: 0 });
        }
      }, 200);
    }),
});

export default router;
