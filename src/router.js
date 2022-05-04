import { createWebHashHistory, createRouter } from "vue-router";
import Home from './Home.vue'
import Search from './components/Search.vue'


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
  history: createWebHashHistory(),
  routes,
});

export default router;