<template>
    <header>
      <div class="item">
        <input type="text" v-model="username" placeholder="Digite o nome do usuario">
        <button @click="this.$emit('findRepositories', this.username)">Pesquisar</button>
      </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },

}
</script>

<style scoped>
header{
    width: 100%;
    height: 65px;
    background-color: #0d1117;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #30363d;
}
.item{
  width: 300px;
  display: flex;
}
input {
  width: 100%;
  padding: 10px;
  margin-right: 5px;
  color: white;
  border-radius: 10px;
  background-color: #0d1117;
  border: 1px solid #30363d;
}
input:focus{
    box-shadow: 0 0 0 0;
    border: 1px solid #30363d;
    outline: 0;
}
button{
  width: 100px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  background-color: #21262d;
  border: 1px solid #30363d;
}
</style>