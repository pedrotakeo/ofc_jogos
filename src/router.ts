import Membros from './pages/Membros.vue'
import Home from './pages/Home.vue';
import Projetos from './pages/Projetos.vue'
import Inscricao from './pages/Inscricao.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },

  { path: '/home', component: Home, meta: { public: true } },
  { path: '/membros', component: Membros, meta: { public: true } },
  { path: '/projetos', component: Projetos, meta: { public: true } },
  { path: '/inscricao', component: Inscricao, meta: { public: true } },
  { path: '/:pathMatch(.*)*', redirect: '/home' }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const isPublic = to.matched.some(record => record.meta.public);

  if (!isPublic) {

    next();
  } else {
    next();
  }
});

export default router
