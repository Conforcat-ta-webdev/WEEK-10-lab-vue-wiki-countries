import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../pages/CountriesListView.vue"),
    children: [
      {
        path: ":alphaCode",
        name: "details",
        component: () => import("../pages/CountryDetailsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
