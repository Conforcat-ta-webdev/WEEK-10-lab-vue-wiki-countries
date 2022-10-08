<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
      <div class="list-group"> 
        <RouterLink          
          v-for="country in countries" 
          :key="country.alpha3Code" 
          class="list-group-item list-group-item-action" 
          :to="country.alpha3Code"
        >
          <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
          <p>{{ country.name.common }}</p>
        </RouterLink>
      </div>
  </div>
</template>

<script setup>
import CountryDetails from "./CountryDetails.vue";
const props = defineProps({
  countries: Array
});

</script>

<style>

</style>