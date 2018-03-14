<template>
    <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with: </p>
        <ul>
            <li><a href="https://get.asp.net/"><icon :icon="['fab', 'microsoft']"/> ASP.NET Core</a> and <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a>                    for cross-platform server-side code</li>
            <li><a href="https://vuejs.org/"><icon :icon="['fab', 'vuejs']"/> Vue.js</a> for client-side code</li>
            <li><a href="https://webpack.js.org/">Webpack</a> for building and bundling client-side resources</li>
            <li><a href="http://getbootstrap.com/">Bootstrap</a> for layout and styling</li>
            <li><a href="http://jquery.com/">JQuery</a> for Bootstrap components</li>
            <li><a href="https://fontawesome.com"><icon :icon="['fab', 'font-awesome']"/> Font Awesome</a> (Free) for the icons</li>
            <li><a href="api/SampleData/WeatherForecasts">API sample data</a> from the dotnet controller</li>
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

        <br><br>

        <h2>This Template brought to you by <a href="http://DevHelp.Online">DevHelp.Online</a></h2>
        <strong>Consulting | Development | Training | Workshops</strong><br>
        <p>Get your Team or Application up to speed by working with some of the leading industry experts in JavaScript & ASP.NET!</p>

        <strong>Contact us today: </strong>
        <p><a href="mailto:hello@devhelp.online"><icon icon="envelope"/> Hello@DevHelp.Online</a></p>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
