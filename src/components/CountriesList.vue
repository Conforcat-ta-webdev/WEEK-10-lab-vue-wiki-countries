<script setup>
  import countries from '../countries.json'

  function sortArray(a,b) {
    if (a.name.common < b.name.common) {return -1};
    if (a.name.common > b.name.common) {return 1};
    return 0;
  }

  const countriesSorted = countries.sort(sortArray);

</script>

<template>
  <div class="col-5 scroll" style="max-height: 90vh; overflow-x: auto">
    <div class="list-group"> 
      <RouterLink 
        v-for="country in countriesSorted" 
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

<style scoped>
  .scroll::-webkit-scrollbar {
    appearance: none;
  }

  .scroll::-webkit-scrollbar:vertical {
    width:10px;
  }

  .scroll::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
  } 

  .scroll::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
  .scroll::-webkit-scrollbar-track {
    border-radius: 10px;  
  }
</style>



