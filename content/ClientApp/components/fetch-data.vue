<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>

        <div v-if="!forecasts" class="text-center">
            <p><em>Loading...</em></p>
            <h1><icon icon="spinner" pulse/></h1>            
        </div>

        <template v-if="forecasts">
            <table class="table">
                <thead  class="bg-dark text-white">
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="index % 2 == 0 ? 'bg-white' : 'bg-light'" v-for="(forecast, index) in forecasts" :key="index">
                        <td>{{ forecast.dateFormatted }}</td>
                        <td>{{ forecast.temperatureC }}</td>
                        <td>{{ forecast.temperatureF }}</td>
                        <td>{{ forecast.summary }}</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <li :class="'page-item' + (currentPage == 1 ? ' disabled' : '')">
                        <a class="page-link" href="#" tabindex="-1" @click="loadPage(currentPage - 1)">Previous</a>
                    </li>
                    <li :class="'page-item' + (n == currentPage ? ' active' : '')" v-for="(n, index) in totalPages" :key="index">
                        <a class="page-link" href="#" @click="loadPage(n)">{{n}}</a>
                    </li>
                    <li :class="'page-item' + (currentPage < totalPages ? '' : ' disabled')">
                        <a class="page-link" href="#" @click="loadPage(currentPage + 1)">Next</a>
                    </li>
                </ul>
            </nav>
        </template>
    </div>
</template>

<script>
export default {
  computed: {
    totalPages: function () {
      return Math.ceil(this.total / this.pageSize)
    }
  },

  data () {
    return {
      forecasts: null,
      total: 0,
      pageSize: 5,
      currentPage: 1
    }
  },

  methods: {
    async loadPage (page) {
      // ES2017 async/await syntax via babel-plugin-transform-async-to-generator
      // TypeScript can also transpile async/await down to ES5
      this.currentPage = page

      try {
        var from = (page - 1) * (this.pageSize)
        var to = from + this.pageSize
        let response = await this.$http.get(`/api/weather/forecasts?from=${from}&to=${to}`)
        console.log(response.data.forecasts)
        this.forecasts = response.data.forecasts
        this.total = response.data.total
      } catch (err) {
        window.alert(err)
        console.log(err)
      }
      // Old promise-based approach
      // this.$http
      //    .get('/api/SampleData/WeatherForecasts')
      //    .then(response => {
      //        console.log(response.data)
      //        this.forecasts = response.data
      //    })
      //    .catch((error) => console.log(error))*/
    }
  },

  async created () {
    this.loadPage(1)
  }
}
</script>

<style>
</style>
