import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/components/Home")
    },
    {
      name: "createOrganization",
      path: "/organizations/create",
      component: () => import("@/components/CreateOrganization")
    },
    {
      name: "organizations",
      path: "/organizations",
      component: () => import("@/components/Organizations")
    }
  ],
  proxyTable: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true
    }
  }
});
