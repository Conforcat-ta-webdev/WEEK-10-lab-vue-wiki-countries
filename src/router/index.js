// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('../components/CountriesList.vue'),
  },
  {
    path: '/:id', //'/details', THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM! <!--Router view Iteracion 1.4 if we want the country details clicked to be displayed from the list -->
    name: 'details',
    component: () => import('../components/CountryDetails.vue')
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