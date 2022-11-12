import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  // {
  //   path: '/test1',
  //   name: 'test1',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/Test1.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
