<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>
        
        <p v-if="forecasts.length === 0"><em>Loading...</em></p>

        <table class='table' v-if="forecasts">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody v-for="forecast in forecasts">
                <tr>
                    <td>{{forecast.dateFormatted}}</td>
                    <td>{{forecast.temperatureC}}</td>
                    <td>{{forecast.temperatureF}}</td>
                    <td>{{forecast.summary}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            forecasts: []
        }
    },

    methods: {
    },
    
    created() {
        this.$http({
            url: './api/SampleData/WeatherForecasts'
        }).then((response) => {
            this.forecasts.push(...response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>

<style>
</style>