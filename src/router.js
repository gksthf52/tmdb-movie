import { createWebHistory, createRouter } from "vue-router";
import Home from './Home.vue'
import Search from './Search.vue'


const routes = [ 
  {
    path: "/",
    component: Home
  },
  {
    path: "/search",
    component: Search
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;