import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adminView',
    name: 'adminView',
    component: () => import( '../views/adminView.vue')
  },
  {
    path: '/decoracionesView',
    name: 'decoracionesView',
    component: () => import( '../views/decoracionesView.vue')
  },
  {
    path: '/pastelesView',
    name: 'pastelesView',
    component: () => import('../views/pastelesView.vue')
  },
  {
    path: '/cartView',
    name: 'cartView',
    component: () => import('../views/cartView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
