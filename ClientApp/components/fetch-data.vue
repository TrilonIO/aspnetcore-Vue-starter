<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>
        
        <!--
        <p data-bind='ifnot: forecasts'><em>Loading...</em></p>

        <table class='table' data-bind='if: forecasts'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody data-bind='foreach: forecasts'>
                <tr>
                    <td data-bind='text: dateFormatted'></td>
                    <td data-bind='text: temperatureC'></td>
                    <td data-bind='text: temperatureF'></td>
                    <td data-bind='text: summary'></td>
                </tr>
            </tbody>
        </table>
        -->

    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
    },

    created() {
        /*this.$http
        .get('/api/ExampleWebAPI', (data) => {
        console.log(data);
        this.data = data;
        })
        .error((err) => console.log(err))*/
    }
}
</script>

<style>
</style>