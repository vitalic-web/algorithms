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
    component: () => import('../views/QuickSortView.vue'),
  },
  {
    path: '/caching',
    name: 'caching',
    component: () => import('../views/CachingView.vue'),
  },
  {
    path: '/selection',
    name: 'selection',
    component: () => import('../views/SelectionSortView.vue'),
  },
  {
    path: '/recursion',
    name: 'recursion',
    component: () => import('../views/RecursionView.vue'),
  },
  {
    path: '/dijkstra',
    name: 'dijkstra',
    component: () => import('../views/DijkstraView.vue'),
  },
  {
    path: '/arrays',
    name: 'arrays',
    component: () => import('../views/ArraysView.vue'),
  },
  {
    path: '/objects',
    name: 'objects',
    component: () => import('../views/ObjectsView.vue'),
  },
  {
    path: '/sets',
    name: 'sets',
    component: () => import('../views/SetsAndMaps.vue'),
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/OtherView.vue'),
  },
  {
    path: '/architecture',
    name: 'architecture',
    component: () => import('../views/SPAArchitectureView.vue'),
  },
  {
    path: '/architecture/mvc',
    name: 'mvc',
    component: () => import('../views/MVCView.vue'),
  },
  {
    path: '/architecture/mvvm',
    name: 'mvvm',
    component: () => import('../views/MVVMView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
