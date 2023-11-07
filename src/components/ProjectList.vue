<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      projects: [],
      pagination: {
        next: null,
        prev: null,
        links: null,
      },
      api: { baseUrl: "http://127.0.0.1:8000/api/" },
    };
  },
  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;

        this.pagination.next = response.data.next_page_url;
        this.pagination.links = response.data.links;
        console.log(response.data.links);
      });
    },
  },
  created() {
    this.fetchProjects();
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

    <nav aria-label="page navigation mt-3">
      <ul class="pagination">
        <li
          class="page-item"
          v-for="link in pagination.links"
          @click="fetchProjects(link.url)"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>

    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            v-for="link in pagination.links"
            @click="fetchProjects(link.url)"
            class="page-item"
          >
            <a class="page-link" href="#">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
