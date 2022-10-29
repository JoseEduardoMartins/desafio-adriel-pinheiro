<template>
  <div class="conatiner">
    <div class="container_item">
        <p>Umidade: {{humidity}} %</p>
    </div>
    <div class="container_item">
        <p>Temperatura: {{temperature}} ºC</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHeaderVue',
  props: {
    temperature: Number,
    humidity: Number
  }
}
</script>

<style scoped>
.conatiner {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #30363d;
}
p{
  color: white;
}
</style>