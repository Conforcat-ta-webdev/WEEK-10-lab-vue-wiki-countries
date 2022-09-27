<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
export default {
  data() {
    return {
      countries: [],
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
