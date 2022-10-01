
<script setup>
import { ref, watch, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import countries from "../countries.json";

const route = useRoute()

const baseFlagURL = ref('');
const myCountry = ref({});


function importCountry() {
  countries.forEach( (country) => {
  if(country.alpha3Code === route.params.countries) {
    myCountry.value = country
    baseFlagURL.value = 'https://flagpedia.net/data/flags/icon/72x54/ALPHA2.png'.replace('ALPHA2', country.alpha2Code.toLowerCase());
  }
} );
}


importCountry();
baseFlagURL.value = 'https://flagpedia.net/data/flags/icon/72x54/ALPHA2.png'.replace('ALPHA2', myCountry.value.alpha2Code.toLowerCase());


onUpdated( () => importCountry() )



/*
async function getCountry() {
const countryURL = 'https://ih-countries-api.herokuapp.com/countries/'.concat(route.params.countries);
const response = await fetch(countryURL)
if(response.ok) {
  const json = await response.json()
  myCountry.value = json
}
*/

/* A different way of getting my object from fetch
      .then(response => {
            if(response.ok) return response.json();
      })
      .then(json => {    
     
        // JSON.parse(JSON.stringify(json));
         myCountry.value = json
      }) ;

      }

      getCountry();
*/

  </script>

<template>
  <div class="col-md-6">
    <div class="card" style="width: 25rem; margin-left: 140px;">
      <img :src="baseFlagURL" class="card-img-top" alt="Flag image">
      <div class="card-body">
        <h2 class="card-title text-center">{{ myCountry.name.common }}</h2>
        <div>
          
        </div>
      </div>
    </div>
    
  
  </div>
</template>


<style scoped>
  .chosenFlag {
    width: 250px;
  }
</style>