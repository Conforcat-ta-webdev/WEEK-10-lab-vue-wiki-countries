import { createRouter, createWebHistory } from 'vue-router';
import Countrieslist from '../components/CountriesList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    children: [
      {
        path: '/details/:index',
        name: 'details',
        component: () => import('../components/CountryDetails.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;