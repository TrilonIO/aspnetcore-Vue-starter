<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
        
    </div>

</template>

<script>
export default {
    data() {
        return {
        }
    }
} 
</script>

<style>
</style>