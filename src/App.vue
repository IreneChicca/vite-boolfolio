<script>
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Projects",
      projects: [],
      api: { baseUrl: "http://127.0.0.1:8000/api/" },
    };
  },

  components: { ProjectList },
  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        console.log(response.data.data);
        this.projects = response.data.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="text-center my-5">
    <h1>{{ title }}</h1>
  </div>
  <router-view></router-view>
  <ProjectList :projects="projects" />
</template>

<style lang="scss"></style>
