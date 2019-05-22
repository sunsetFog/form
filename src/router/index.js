import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Main',
      component:resolve => require(['@/components/main'],resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login/login'],resolve)
    },
    {
      path: '/shuoming',
      name: 'Shuoming',
      component: resolve => require(['@/components/shuoming'],resolve)
    },
    {
      path: '/jibenxinxi',
      name: 'Jiben',
      component: resolve => require(['@/components/jibenxinxi'],resolve)
    },
  /*  {
      path: '/',
      name: 'Main',
      component: resolve => require(['@/components/main'],resolve)
    },*/
    {
      path: '/message',
      name: 'Message',
      component: resolve => require(['@/components/message'],resolve)
    },
    {
      path: '/shangchuan',
      name: 'Shangchuan',
      component: resolve => require(['@/components/upImg'],resolve)
    },
  ]
})
