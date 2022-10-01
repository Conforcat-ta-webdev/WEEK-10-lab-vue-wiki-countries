<script setup>
   import countries from "../countries.json"
   /* function sortCountries(a,b) {
        if (a.name.common < b.name.common) {return -1};
        if (a.name.common > b.name.common) {return 1};
        return 0;
   }
   
   const countriesSorted = countries.sort(sortCountries); */

</script>
<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
     <!--   <RouterLink 
       class="" to="https://flagpedia.net/data/flags/icon/72x54/aw.png">
        <h1 v-for="country in countries" :key="country.name.common">{{ country.name.common }} </h1>
       </RouterLink>   -->
       <RouterLink
       v-for="country in countries"
       :key="country.name.common"
       class="list-group-item list-group-item-action" 
       :to="country.alpha3Code">
       <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
       <p>{{ country.name.common }}</p>
       </RouterLink>
    </div>
  </div>
</template>
<style scoped>
    .scroll::-webkit-scrollbar {
        appearance: none;
    }
    
</style>