import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', redirect: '/home' },

  { path: '/home', component: Home, meta: { public: true } },
  { path: '/:pathMatch(.*)*', redirect: '/home' }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

    next();
  })

export default router
