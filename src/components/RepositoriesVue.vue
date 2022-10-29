<template>
  <div class="container">
    <div v-for="repository in repositories" :key="repository.id" class="container_item">
      <a href="repository.">{{ repository.name }}</a>
      <p>{{ repository.stargazers_count }} stars </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepositoriesVue",
  props: {
    repositories: Array
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
}
.container_item{
    margin: 10px;
    padding: 15px;
    width: 90%;
    color: white;
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
@media (min-width: 700px) {
    .container_item{
      width: 25%;
    }
}
@media (min-width: 900px) {
    .container_item{
      width: 29%;
    }
}
</style>
