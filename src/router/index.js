import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import auth from 'views/auth'
import home from 'views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: to => {
        return {path: '/auth'}
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
