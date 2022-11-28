import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './stores/users'

import Home from './views/Home.vue'

const requiredAuth = async(to, from, next) => {
  const userStore = useUserStore()
  userStore.loadingSession = true
  const user = await userStore.currentUser()
  if(user){
    next()
  } else {
    next('/login')
  }
  userStore.loadingSession = false
}

const routes = [
    {
      path: '/',
      name: 'Home', beforeEnter: requiredAuth,
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    }
  ]

const history = createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
    routes,
    history
})

export default router;