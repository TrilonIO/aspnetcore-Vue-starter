import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import NavMenu from 'components/nav-menu'

// Platform test
const inBrowser = typeof window !== 'undefined'

// Hack needed for now (vue-resource uses document)
// https://github.com/pagekit/vue-resource/issues/455
if (inBrowser) {
    Vue.use(require('vue-resource'))
}

sync(store, router)

const app = new Vue({
    store,
    router,
    ...App
})

Vue.component('counter-example', CounterExample);
Vue.component('fetch-data', FetchData);
Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);

export {
    app,
    router,
    store
}
