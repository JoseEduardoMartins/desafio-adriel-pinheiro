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
      this.repositories = [];
      this.messageError = '';

      if (!username.length) return alert("Nome de usuario indefinido")

      const result = await getRepositoriesByUser(username);

      if (result.status == 200) {
        const repositories = result.data;

        if(!repositories.length) return this.messageError = 'Usuario não tem repositorios';

        console.log(repositories[0]);
        
        this.repositories = repositories;
      }

      if(result.status == 404)
        this.messageError = 'Usuario inexistente!';
    }
  },
  async mounted () {
      const { timezone, current } = await getLocation();
      this.state = timezone.split('/')[1].replace("_", " ");
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
