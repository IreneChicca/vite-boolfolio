<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data() {
    return {
      title: "Details",
      project: {},
      api: { baseUrl: "http://127.0.0.1:8000/api/" },
    };
  },

  methods: {},
  created() {
    axios
      .get(this.api.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        console.log(response.data);

        this.project = response.data;
      });
  },

  components: { ProjectCard },
};
</script>
<template>
  <!-- <p>{{ this.$route.params.id }}</p> -->
  <!-- <h1>{{ this.project }}</h1> -->
  <div class="col-5 m-auto">
    <ProjectCard :project="project" :isDetail="true" v-if="project" />
  </div>
</template>
<style lang="scss" scoped></style>
