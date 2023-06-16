import { createRouter, createWebHistory } from "vue-router";

import About from "./assets/pages/About.vue";
import Contact from "./assets/pages/Contact.vue";
import ProjectPage from "./assets/pages/ProjectPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "projects",
      component: ProjectPage,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/Contact",
      name: "contact",
      component: Contact,
    },
  ],
});
export { router };
