import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

Vue.use(VueRouter);

// TODO: move to routes.js

let router = new VueRouter({
    mode: 'history',
    routes
})

export default router
