import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
