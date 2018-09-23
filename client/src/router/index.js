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
      path: "/organization/create",
      component: () => import("@/components/CreateOrganization")
    }
  ]
});
