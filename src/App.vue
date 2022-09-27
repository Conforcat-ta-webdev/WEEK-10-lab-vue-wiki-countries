<!--src/App.js-->
<script setup>
  import Navbar from './components/Navbar.vue'
</script>
<template>
  <div class="app">
    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList :countries="countries" />
        <router-view />  
      </div>
    </div>
  </div>
</template>
