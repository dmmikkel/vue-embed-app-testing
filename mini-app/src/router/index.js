import Vue from 'vue'
import VueRouter from 'vue-router'
import leaseTermination from 'lease-termination';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/12345'
  },
  ...leaseTermination.createRoutes({ path: '/:tenancyId/' }),
];

const router = new VueRouter({
  routes
})

export default router
