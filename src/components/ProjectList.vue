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
    <div class="row row-cols-3">
      <div class="col">
        <div class="card">
          <h5>title</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
