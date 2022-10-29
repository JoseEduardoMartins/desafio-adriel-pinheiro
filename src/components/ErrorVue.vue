<template>
  <div class="container">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
    name: 'ErrorVue',
    props: {
        message: String
    }
}
</script>

<style>
.container{
  margin-top: 50px;
  width: 100%;
}
h2{
  color: white;
  text-align: center;
}
</style>