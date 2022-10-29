<template>
  <HeaderVue @findRepositories="findRepositories" />
  <SubHeaderVue :humidity="humidity" :temperature="temperature" />
  <RepositoriesVue v-if="repositories.length" :repositories="repositories" />
  <ErrorVue v-else :message="messageError" />
</template>

<script>
import { getRepositoriesByUser, getWeather } from './services/app';
import HeaderVue from './components/HeaderVue';
import SubHeaderVue from './components/SubHeaderVue';
import RepositoriesVue from './components/RepositoriesVue';
import ErrorVue from './components/ErrorVue';

export default {
  data () {
    return {
      repositories: [],
      humidity: 0,
      temperature: 0,
      messageError: ''
    }
  },
  name: 'App',
  methods: {
    async findRepositories (username) {
      this.repositories = [];
      this.messageError = '';

      if (!username.length) return this.messageError = 'Nome de usuário indefinido.';

      const result = await getRepositoriesByUser(username);

      if (result.status == 200) {
        const repositories = result.data;

        if(!repositories.length) return this.messageError = 'Usuário não tem repositórios.';
        
        this.repositories = repositories;
      } else if(result.status == 404)
        this.messageError = 'Usuário não foi encontrado.';
    }
  },
  async mounted () {
    document.getElementById('name').focus();
    
    const result = await getWeather();
    
    if (result.status == 200) {
      const { current } = result.data;
      this.humidity = current.humidity;
      this.temperature = Math.trunc(current.temp);
    }
    else this.messageError = `${result.status} Error - ${result.statusText}`;
  },
  components: {
    HeaderVue,
    SubHeaderVue,
    RepositoriesVue,
    ErrorVue
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #0d1117;
}
</style>
