<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      title: "Product List",
    };
  },

  props: {
    projects: Array,
  },

  components: { ProjectCard },
};
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="container">
    <div class="row row-cols-5 g-3">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
