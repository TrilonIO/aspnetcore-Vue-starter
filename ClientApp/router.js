import Vue from 'vue'
import VueRouter from 'vue-router'
import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'

Vue.use(VueRouter);

// TODO: move to routes.js
const routes = [
    { path: '', component: HomePage },
    { path: '/counter', component: CounterExample },
    { path: '/fetch-data', component: FetchData }
]

let router = new VueRouter({
    //mode: 'history',
    routes
})

export default router
