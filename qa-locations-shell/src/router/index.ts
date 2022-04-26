import { createRouter, createWebHistory } from "vue-router";

import WelcomeView from "../welcome/WelcomeView.vue";
import ProfileView from "../profile/ProfileView.vue";
import MapView from "../map/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/map/:loc",
      name: "map",
      component: MapView,
      props: true,
    },
  ],
});

export default router;
