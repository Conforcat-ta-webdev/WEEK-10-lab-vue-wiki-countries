// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'list' */ '../components/CountriesList.vue'),
  },
  {
    path: '/:countryCode', // THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM!
    name: 'details',
    component: () => import(/* webpackChunkName: 'details' */ '../components/CountryDetails.vue'),
    props: true
  },
  /*{
    path: '/PEI', // THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM!
    name: 'PereiraBonita',
    component: () => import(/* webpackChunkName: 'details' */ //'../components/CountryDetails.vue'),
    /*props: {
      countryId: 'FRA'
    }
  },*/
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;