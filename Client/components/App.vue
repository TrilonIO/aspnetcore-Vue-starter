<template>
  <div id="app">
    {{ counter }}
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
