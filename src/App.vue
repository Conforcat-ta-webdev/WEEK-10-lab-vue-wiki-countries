<script setup>
import Navbar from './components/Navbar.vue'
import CountriesList from './components/CountriesList.vue'
import CountryDetails from './components/CountryDetails.vue'
</script>

<template>
  <div class="app">
    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <CountriesList />
          </div>
        </div>

        <div class="col-7">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>