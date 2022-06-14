import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/manage/list",
    name: "ManageList",
    component: () =>
      import(/* webpackChunkName: "manage-list" */ "../views/ManageList.vue"),
  },
  {
    path: "/manage/detail",
    name: "ManageDetail",
    component: () =>
      import(
        /* webpackChunkName: "manage-detail" */ "../views/ManageDetail.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
