<script>
export default {
  name: "Headerz",
  data() {
    return {
      pages: [
        {
          label: "Projects",
          routename: "projects",
        },
        {
          label: "About",
          routename: "about",
        },
        {
          label: "Contact",
          routename: "contact",
        },
      ],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="(link, index) in pages" :key="index" class="nav-item active">
          <router-link :to="{ name: link.routename }" class="nav-link">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
