<script>
export default {
  data() {
    return {
      title: "Project Card",
    };
  },

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card p-4 m-3 text-center">
    <h5>{{ project.title }}</h5>
  </div>
</template>

<style lang="scss" scoped></style>
