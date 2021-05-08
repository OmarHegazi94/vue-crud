import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import PhotoDetails from "@/views/PhotoDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "details",
    component: PhotoDetails,
    props: true
  },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
//   linkActiveClass: "active",
//   linkExactActiveClass: "active",
});

export default router;
