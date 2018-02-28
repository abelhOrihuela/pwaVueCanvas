import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import About from '@/components/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about-us/',
      name: 'About',
      component: About
    }
  ]
})
