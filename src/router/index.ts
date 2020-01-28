import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/components",
    name: "components",
    component: () => import("../views/ComponentOverview.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../login-view/LoginView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
