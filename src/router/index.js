import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('../components/CountriesList.vue'),
  },
  {
    path: '/:code',
    name: 'details',
    component: () => import('../components/CountryDetails.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;