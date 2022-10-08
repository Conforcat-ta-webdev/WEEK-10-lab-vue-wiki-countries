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

<script setup>
import Navbar from './components/Navbar.vue'
import CountriesList from './components/CountriesList.vue'
import countries from "./countries.json"
import {defineProps} from 'vue'

</script>

<style>
  body{
    margin:0;
  }
</style>