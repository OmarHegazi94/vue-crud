import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import PostDetails from "@/views/PostDetails.vue";
import AddPost from "@/views/AddPost.vue";
// import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:postID",
    name: "details",
    component: PostDetails,
    // props: true
  },
  {
    path: "/addPost",
    name: "AddPost",
    component: AddPost,
    // props: true
  },
  // { 
  //   path: '/:catchAll(.*)', 
  //   component: PageNotFound,
  //   name: 'NotFound'
  // }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
//   linkActiveClass: "active",
//   linkExactActiveClass: "active",
});

export default router;
