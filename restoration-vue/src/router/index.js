import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import About from "/var/home/huntermm18/Documents/CS260/restoration-project-vue-260/restoration-project/restoration-vue/src/views/About.vue";
import About from "../views/About.vue";
import Information from "../views/Information.vue";
import People from "../views/People.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/information",
    name: "Information",
    component: Information,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
