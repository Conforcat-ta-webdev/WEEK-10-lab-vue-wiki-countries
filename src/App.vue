<!--src/App.js-->
<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue'
  import CountriesList from './components/CountriesList.vue'
</script>
<template>
  <div class="app">
    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList />
        <RouterView />
      </div>
    </div>
  </div>
</template>
