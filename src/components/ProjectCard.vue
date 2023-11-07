<script>
export default {
  data() {
    return {
      title: "Project Card",
    };
  },

  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="card m-3 text-center">
    <div class="card-header">
      <span class="badge" :style="{ backgroundColor: project.type.color }">{{
        project.type.label
      }}</span>
    </div>
    <div class="card-body">
      <h5>{{ project.title }}</h5>
      <span
        class="badge mx-1"
        v-for="technology in project.technologies"
        :style="{ backgroundColor: technology.color }"
      >
        {{ technology.label }}
      </span>

      <div>
        <router-link
          :to="{ name: 'details', params: { id: project.id } }"
          class="btn btn-outline-secondary my-3"
          >Dettagli</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
