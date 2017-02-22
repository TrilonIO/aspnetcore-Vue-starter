<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>
        
        
        <p v-if="!forecasts">"<em>Loading...</em></p>

        <table class="table" v-if="forecasts">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
				<tr v-for="forecast in forecasts" >
                    <td>{{ forecast.dateFormatted }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
        

    </div>
</template>

<script>
export default {
    data() {
        return {
		    forecasts: null
        }
    },

    methods: {
    },

    created() {
	    // With TypeScript or core-js, this can be changed to async/await like so:
		// try {
		//     let response = await this.$http.get('/api/SampleData/WeatherForecasts')
		//     console.log(response.data);
        //     this.forecasts = response.data;
		// } catch (error) {
		//     console.log(error)
		// }
        this.$http
            .get('/api/SampleData/WeatherForecasts')
			.then(response => {
                console.log(response.data)
                this.forecasts = response.data
            })
            .catch((error) => console.log(error))
    }
}
</script>

<style>
</style>