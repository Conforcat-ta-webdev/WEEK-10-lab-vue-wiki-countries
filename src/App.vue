<!--src/App.js-->
<script setup>
  import Navbar from './components/Navbar.vue'
  import CountriesList from './components/CountriesList.vue'
</script>
<template>
  <div class="app">
    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList /> 
        <router-view />
      </div>
    </div>
  </div>
</template>
