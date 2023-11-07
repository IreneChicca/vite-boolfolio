import { createWebHistory, createRouter } from "vue-router";

import Homepage from "../pages/HomePage.vue";
import Homepage from "../pages/Portfolio.vue";
import Homepage from "../pages/Details.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "homepage",
      path: "/",
      component: Homepage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: Portfolio,
    },
    {
      name: "details",
      path: "da definire",
      component: Details,
    },
  ],
});

export { router };
