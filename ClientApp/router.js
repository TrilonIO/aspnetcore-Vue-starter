import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!store.state.loggedIn) {
    next({
      path: '/login',
      query: { redirect: to.path }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      async beforeEnter (to, from, next) {
        await store.dispatch('logout')
      }
    }
  ]
})