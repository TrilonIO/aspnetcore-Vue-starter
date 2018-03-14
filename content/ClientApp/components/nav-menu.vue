<template>
    <div class="main-nav">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" @click="toggleCollapsed">
                <span class="navbar-toggler-icon"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/"><icon :icon="['fab', 'microsoft']"/> ASP.NET Core with Vue.js 2</router-link>

            <transition name="slide">
                <div :class="'collapse navbar-collapse' + (!collapsed ? ' show':'')" v-show="!collapsed">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="(route, index) in routes" :key="index">
                            <router-link :to="route.path" exact-active-class="active">
                                <icon :icon="route.icon" class="mr-2" /><span>{{ route.display }}</span> 
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </nav>
    </div>
</template>

<script>
    import { routes } from '../router/routes'

    export default {
      data () {
        return {
          routes,
          collapsed: true
        }
      },
      methods: {
        toggleCollapsed: function (event) {
          this.collapsed = !this.collapsed
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