import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Account from "../views/Account.vue";
import Current from "../views/Current.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
    {
      path: "/current",
      name: "current",
      component: Current,
    },
  ],
});

export default router;
