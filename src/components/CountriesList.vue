<script setup>
   import countries from "../countries.json"
  
  countries.sort( function(a, b ) {
        return a.name.common < b.name.common ? -1 : a.name.common > b.name.common ? 1 : 0;
    })

</script>
<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
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
