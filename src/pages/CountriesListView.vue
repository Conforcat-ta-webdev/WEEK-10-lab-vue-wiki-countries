<template>
  <div class="container">
    <div class="row">
      <CountriesList />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import CountriesList from "../components/CountriesList.vue";
export default {
  components: { CountriesList },
};
</script>
