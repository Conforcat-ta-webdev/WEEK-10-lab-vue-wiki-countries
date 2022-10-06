<script>
  import Navbar from "./components/Navbar.vue";
  import CountriesList from "./components/CountriesList.vue";
  import CountryDetails from "./components/CountryDetails.vue";
  import countries from "./countries.json";

  export default {
    data() {
      return { countries: countries };
    },
    components: {
      Navbar,
      CountriesList,
      CountryDetails,
    },
  };
  </script>

<template>
<div class="app">
    <Navbar />
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <CountriesList :countries="countries" />
      </div>
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>
</template>