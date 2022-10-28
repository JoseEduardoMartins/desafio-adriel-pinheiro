<template>
  <input type="text" v-model="input">
  <button>buscar</button>

</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
