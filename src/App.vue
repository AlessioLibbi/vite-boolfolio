<script>
import AppHeaderVue from "./components/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppHeaderVue,
  },
};
</script>

<template>
  <AppHeaderVue />
  <router-view></router-view>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
