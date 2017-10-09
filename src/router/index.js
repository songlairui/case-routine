import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import All from '@/components/All'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/all',
      name: 'Main',
      component: All
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
