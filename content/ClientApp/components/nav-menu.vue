<template>
    <div class="main-nav">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" @click="toggleCollapsed">
                <span class="navbar-toggler-icon"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">ASP.NET Core with Vue.js 2</a>

            <transition name="slide">
                <div :class="'collapse navbar-collapse' + (!collapsed ? ' show':'')" :ref="navbarText" v-show="!collapsed">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="(route, key, index) in routes" :key="index">
                            <router-link :to="route.path">
                                <span :class="route.style"></span> {{ route.display }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </nav>

        
        <!-- <button type="button" class="navbar-toggler" data-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
 -->
        <!-- <nav class="navbar navbar-dark bg-dark">
            <div class="navbar-header">
            </div>
            <div class="clearfix"></div>
            <transition name="slide">
                <div class="collapse navbar-collapse in" id="navbarTogglerDemo03">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(route, key, index) in routes" :key="index">
                            <router-link :to="route.path">
                                <span :class="route.style"></span> {{ route.display }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </nav> -->
    </div>
</template>

<script>
import { routes } from '../routes'

export default {
    data() {
        return {
            routes,
            collapsed : true
        }
    },
    methods: {
        toggleCollapsed: function(event){
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style scoped>
    .slide-enter-active, .slide-leave-active {
    transition: max-height .35s
    }
    .slide-enter, .slide-leave-to {
    max-height: 0px;
    }

    .slide-enter-to, .slide-leave {
    max-height: 20em;
    }
</style>