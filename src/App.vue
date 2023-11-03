<script>
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      api: { baseUrl: "http://127.0.0.1:8000/api/projects" },
    };
  },

  components: { ProjectList },
  methods: {
    fetchPosts(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
      });
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<template>
  <h1>homepage</h1>

  <ProjectList :projects="projects" />
</template>

<style lang="scss"></style>
