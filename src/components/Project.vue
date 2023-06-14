<script>
export default {
  name: "Project",
  props: {
    project: Object,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="card h-100" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        {{ project.slug }}
      </h6>
      <p class="card-text">
        {{ project.description }}
      </p>
      <p v-if="project.type" class="card-text">{{ project.type.name }}</p>
      <ul class="list-unstyled">
        <li class="card-text" v-for="technology in project.technologies">
          {{ technology.name }}
        </li>
      </ul>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
