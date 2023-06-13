<script>
import axios from "axios";
import Project from "./components/Project.vue";

export default {
  data() {
    return {
      Api: "http://127.0.0.1:8000",
      projects: [],
    };
  },
  components: {
    Project,
  },
  mounted() {
    this.getCard();
  },
  methods: {
    getCard() {
      axios.get(`${this.Api}/api/projects`).then((resp) => {
        this.projects = resp.data.results;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center mt-5 mb-5">I Nostri Progetti</h1>
    <div class="row row-cols-3 g-3">
      <div
        class="col d-flex justify-content-center"
        v-for="project in projects"
        :key="project.id"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
