<template>
  <HeaderVue @findRepositories="findRepositories" />
  <SubHeaderVue :state="state" :temperature="temperature" />
  <RepositoriesVue v-if="repositories.length" :repositories="repositories" />
  <ErrorVue v-else :message="messageError" />
</template>

<script>
import { getRepositoriesByUser, getLocation } from './services/app';
import HeaderVue from './components/HeaderVue';
import SubHeaderVue from './components/SubHeaderVue';
import RepositoriesVue from './components/RepositoriesVue';
import ErrorVue from './components/ErrorVue';

export default {
  data () {
    return {
      repositories: [],
      state: '',
      temperature: 0,
      messageError: ''
    }
  },
  name: 'App',
  methods: {
    async findRepositories (username) {
      if (!username.length) return alert("Preencha o campo")
      const repositories = await getRepositoriesByUser(username);
      console.log(repositories);

      if(!repositories.length) {
        this.messageError = 'Usuario não tem repositorios';
        this.repositories = [];
        return
      }
      this.messageError ='';
      this.repositories = repositories;
    }
  },
  async mounted () {
      const { timezone, current } = await getLocation();
      this.state = timezone;
      this.temperature = current.temp;
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
