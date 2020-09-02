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
  @import "../main.css";
</style>
