<script>
export default {
  data() {
    return {
      title: "Product List",
    };
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="container">
    <div class="row row-cols-3 g-3">
      <div class="col" v-for="project in projects">
        <div class="card p-3">
          <h5>{{ project.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
