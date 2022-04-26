import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../welcome/WelcomeView.vue";

import ProfileView from "../profile/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
