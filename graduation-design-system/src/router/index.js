import Vue from 'vue'
import Router from 'vue-router'
import Account from '../pages/account/Account'
import Home from '../pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Account',
      component: Account
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
