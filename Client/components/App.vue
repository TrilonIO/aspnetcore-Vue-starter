<template>
  <div id="app">

    <h1>ASP.NET Core & Vue 2.* Starter</h1>

    Counter item: {{ counter }}

    <h3>More to come!</h3>

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
