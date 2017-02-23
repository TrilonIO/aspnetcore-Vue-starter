<template>
    <div class="main-nav">
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                <a class="navbar-brand" href="/">Vue2Spa</a>
            </div>
            <div class="clearfix"></div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li v-for="route in routes">
                        <!-- TODO: highlight active link -->
                        <router-link :to="route.path">
                            <span :class="route.style"></span> {{ route.display }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { routes } from '../routes'

export default {
    data() {
        return {
            routes
        }
    }
}
</script>

<style>
</style>