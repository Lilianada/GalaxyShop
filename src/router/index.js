import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import ShopView from "../views/ShopView.vue";

const routes = [
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SigninView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(), 
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
      );
  });
};


router.beforeEach(async(to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You must be logged in to view this page");
      next("/signin");
    }
  } else {
    next();
  }
}); 

export default router;
