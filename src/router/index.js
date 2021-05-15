import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Quests from "@/views/Quests";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quests",
    name: "Quests",
    component: Quests,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
