import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import leaseTermination from 'lease-termination'
import TenancyView from '../views/TenancyView'
import TenancyOverview from '../views/TenancyOverview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:tenancyId',
    component: TenancyView,
    props: true,
    children: [
      {
        path: '',
        name: 'TenancyOverview',
        component: TenancyOverview,
      },
      ...leaseTermination.createRoutes(),
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
