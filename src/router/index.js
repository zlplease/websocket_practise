import Vue from 'vue'
import VueRouter from 'vue-router'
import chat from '../views/chat.vue'
import choose from '../views/choose.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'choose'
  },
  {
    path: '/choose',
    name: 'choose',
    component: choose
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
