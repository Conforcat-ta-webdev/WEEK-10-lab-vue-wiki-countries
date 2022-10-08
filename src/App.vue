<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import countries from "./countries.json";
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return { countries: countries };
  },
  components: {
    Navbar,
  },
};
</script>
