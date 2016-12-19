import Vue from 'vue'
import App from 'components/App'

import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}
