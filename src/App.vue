<script>
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

import Navbar from "./components/ui/Navbar.vue";

export default {
  data() {
    return {
      title: "Projects",
    };
  },

  components: { ProjectList, Navbar, Navbar },
};
</script>

<template>
  <div class="">
    <Navbar />
  </div>
  <router-view></router-view>
  <!-- <ProjectList :projects="projects" /> -->
</template>

<style lang="scss"></style>
