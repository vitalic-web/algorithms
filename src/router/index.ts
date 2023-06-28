import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/binary',
    name: 'binary',
    component: () => import('../views/BinarySearchView.vue'),
  },
  {
    path: '/quick',
    name: 'quick',
    component: () => import('../views/QuickSearchView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
