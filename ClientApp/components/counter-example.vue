<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count: <strong>{{ currentCount }}</strong></p>
        <p>Auto count: <strong>{{ autoCount }}</strong></p>

        <button @click="incrementCounter()">Increment</button>
        <button @click="resetCounter()">Reset</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentCount: 0,
            autoCount: 0,
        }
    },

    methods: {
        incrementCounter: function() {
            this.currentCount++;
        },
        resetCounter: function() {
            this.currentCount = 0;
            this.autoCount = 0;
        }
    },

    created() {
        setInterval(() => {
            this.autoCount += 1
        }, 1000)
    }
}
</script>

<style>
</style>