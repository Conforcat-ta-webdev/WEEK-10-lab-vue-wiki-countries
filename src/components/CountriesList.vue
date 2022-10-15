<script setup>
  import { RouterLink } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import axios from 'axios';

  
const countries = ref('')

  onMounted(() => {
    
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then( response => {
        countries.value = response.data;
        countries.value.sort((a, b) => a.name.common.localeCompare(b.name.common))
      })
      .catch( error => console.log(error));
  })    


</script>

<template>
          <!-- Countries List (Bootstrap column) -->
          <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
              <RouterLink 
                v-for="country in countries" 
                :key="country.alpha3Code" 
                class="list-group-item list-group-item-action" 
                :to="{ name: 'details', params: { index : country.alpha3Code }}"
              >
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                <p>{{ country.name.common }}</p>
              </RouterLink>
            </div>
          </div>
   
</template>
    
  <style>
  
  </style>