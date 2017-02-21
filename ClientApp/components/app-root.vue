<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <nav-menu params="route: route">
                    <div class="main-nav">
                        <div class="navbar navbar-inverse">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                <a class="navbar-brand" href="/">aspnetcore_Vue_starter</a>
                            </div>
                            <div class="clearfix"></div>
                            <div class="navbar-collapse collapse">
                                <ul class="nav navbar-nav">
                                    <li>
                                        <a href="/" class="active">
                                            <span class="glyphicon glyphicon-home"></span> Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/counter">
                                            <span class="glyphicon glyphicon-education"></span> Counter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/fetch-data">
                                            <span class="glyphicon glyphicon-th-list"></span> Fetch data
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav-menu>
            </div>
            <div class="col-sm-9">
                <h1>Hello, world!</h1>
                <p>Welcome to your new single-page application, built with:</p>
                <ul>
                    <li><a href="https://get.asp.net/">ASP.NET Core</a> and <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a>                    for cross-platform server-side code</li>
                    <li><a href="https://vuejs.org/">Vue.js</a> and <a href="http://www.typescriptlang.org/">TypeScript</a>                    for client-side code</li>
                    <li><a href="https://webpack.github.io/">Webpack</a> for building and bundling client-side resources</li>
                    <li><a href="http://getbootstrap.com/">Bootstrap</a> for layout and styling</li>
                </ul>
                <p>To help you get started, we've also set up:</p>
                <ul>
                    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return
                        here.</li>
                    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code>                    build tool. Your client-side resources are dynamically built on demand. Updates are available as soon
                        as you modify any file.</li>
                    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after
                        making most changes. Within seconds of saving changes to files, your Vue.js app will be rebuilt and
                        a new instance injected is into the page.</li>
                    <li><strong>Code splitting and lazy loading</strong>. Vue.js components may optionally be bundled individually and
                        loaded on demand. For example, the code and template for 'Counter' is not loaded until you navigate to
                        it..</li>
                    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled,
                        and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>
                </ul>

                <hr/>
                Counter item: {{ counter }}

                <h3>More to come!</h3>

                <a href="api/SampleData/WeatherForecasts">api sample data</a>
            </div>
        </div>
        
    </div>

</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        data : null
      }
    },
    created() {
      /*this.$http
        .get('/api/ExampleWebAPI', (data) => {
          console.log(data);
          this.data = data;
        })
        .error((err) => console.log(err))*/

      setInterval(() => {
        this.counter += 1
      }, 1000)
    }
  }
</script>

<style>
  h1 {
    background-color: grey;
  }
</style>