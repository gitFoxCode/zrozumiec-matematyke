import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/problemy-milenijne',
    name: 'mathproblems',
    component: () => import('../views/Problems.vue')
  },
  {
    path: '/zrozumiec-matematyke',
    name: 'understand',
    component: () => import('../views/Understand.vue')
  },
  {
    path: '/mapa-matematyki',
    name: 'mapthematics',
    component: () => import('../views/Mapthematics.vue')
  },
  {
    path: '/bibliografia',
    name: 'bibliografia',
    component: () => import('../views/Bibliografia.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
