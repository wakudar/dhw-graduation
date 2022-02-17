import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/web-designer',
    name: 'WEBデザイナー専攻',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "web-designer" */ '../views/WebDesigner.vue')
  },
  {
    path: '/movie-creator',
    name: '動画クリエイター専攻',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cg-creator" */ '../views/MovieCreator.vue')
  },
  {
    path: '/cg-creator',
    name: 'CGクリエイター専攻',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cg-creator" */ '../views/CGCreator.vue')
  },
  {
    path: '/created2022',
    name: '2022',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cg-creator" */ '../views/CreatedAt2022.vue')
  },
  {
    path: '/created2021',
    name: '2021',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cg-creator" */ '../views/CreatedAt2021.vue')
  },
  {
    path: '/created2020',
    name: '2020',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cg-creator" */ '../views/CreatedAt2020.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
