<script>
import axios from "axios";
import Project from "./components/Project.vue";

export default {
  data() {
    return {
      Api: "http://127.0.0.1:8000",
      projects: [],
      currentPage: 1,
      lastPage: null,
      totalProject: 0,
      loading: false,
    };
  },
  components: {
    Project,
  },
  mounted() {
    this.getCard();
  },
  methods: {
    getCard(pageNumber = 1) {
      this.loading = true;
      axios
        .get(`${this.Api}/api/projects`, {
          params: {
            page: pageNumber,
          },
        })
        .then((resp) => {
          this.projects = resp.data.results.data;
          this.currentPage = resp.data.results.current_page;
          this.lastPage = resp.data.results.last_page;
          this.total = resp.data.results.total;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <div v-if="!loading" class="container">
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
    <nav
      v-if="lastPage"
      class="mt-4 d-flex justify-content-center"
      aria-label="Page navigation example"
    >
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            @click.prevent="getCard(currentPage - 1)"
            class="page-link"
            href="#"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          :class="{ active: pageNum === currentPage }"
          v-for="pageNum in lastPage"
        >
          <a @click.prevent="getCard(pageNum)" class="page-link" href="#">{{
            pageNum
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === lastPage }">
          <a
            @click.prevent="getCard(currentPage + 1)"
            class="page-link"
            href="#"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <div v-else class="container">
    <h1>Loading dei project....</h1>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
