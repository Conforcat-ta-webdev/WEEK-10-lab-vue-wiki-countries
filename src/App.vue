<template>
  <div class="app">
    <NavBar />
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <CountriesList :countries="countries" />
      </div>
      <div class="col">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script>

  import NavBar from './components/Navbar.vue';
  import CountriesList from './components/CountriesList.vue';
  import countriesJson from "./countries.json";

  export default {
      data: () => ({
          countries: countriesJson
      }),
      components: { 
        NavBar,
        CountriesList
      }
  }
  </script>


<style>
</style>
