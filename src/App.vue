<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      msg: {},
    }
  },
  mounted() {
    axios
    .get('https://geo.ipify.org/api/v1?apiKey=at_TgCTjVrZrXtLQrPG2rBMWzMF5R577&ipAddress=8.8.8.8')
    .then(response => (this.msg = response))
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
