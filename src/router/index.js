import { createWebHistory, createRouter } from "vue-router";

import Homepage from "../pages/HomePage.vue";
import Portfolio from "../pages/Portfolio.vue";
import Details from "../pages/Details.vue";

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
      path: "/portfolio/:id",
      component: Details,
    },
  ],
});

export { router };
