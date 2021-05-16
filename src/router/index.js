import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Quests from "@/views/Quests";
import NewQuest from "@/views/NewQuest"

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
  {
    path: "/new-quest",
    name: "NewQuest",
    component: NewQuest
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
