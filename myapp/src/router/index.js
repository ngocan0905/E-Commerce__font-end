import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/products",
    name: "Products",
    component: import("../views/ProductsPage.vue"),
  },
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: import("../views/ProductDetailPage.vue"),
  },
  {
    path: "/cart",
    name: "CartPage",
    component: import("../views/CartPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: import("../views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
