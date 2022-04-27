import { createWebHistory, createRouter } from "vue-router";
import Home from './Home.vue'
import Detail from './Detail.vue'
// import MovieDetail from './components/MovieDetail.vue'

const routes = [ 
  {
    path: "/",
    component: Home
  },
  {
    path: "/detail",
    component: Detail
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;