import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "root",
  //   component: () => import("../views/Home.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "Countries",
  //   children: [
  //     {
  //       path: "id",
  //       name: "details",
  //       component: () => import("../components/CountryDetails.vue"),
  //     },
  //   ],
  // },
  {
    path: "/",
    name: "root",
    children: [
      {
        path: ":id",
        name: "details",
        component: () => import("../components/CountryDetails.vue"),
      },
    ],
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   component: () => import("../components/Home.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
