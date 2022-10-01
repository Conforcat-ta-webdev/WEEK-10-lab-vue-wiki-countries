
<script setup>
import { ref, watch, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import countries from "../countries.json";

const route = useRoute()

 let baseFlagURL = ref('');


const myCountry = ref({});


countries.forEach( (country) => {
  if(country.alpha3Code === route.params.countries) 
    myCountry.value = country
} )

//console.log(myCountry.value)

onUpdated( () => {
  
  countries.forEach( (country) => {
  if(country.alpha3Code === route.params.countries) {
    myCountry.value = country
    baseFlagURL.value = 'https://flagpedia.net/data/flags/icon/72x54/ALPHA2.png'.replace('ALPHA2', country.alpha2Code.toLowerCase());
  }
} );

//baseFlagURL.replace(ALPHA2,myCountry.alpha2Code.toLowerCase());
})


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

 <h1>These are the country details: {{ $route.params }}</h1>  
 {{ myCountry.name.common }} 
 {{ baseFlagURL }}
 <!-- {{ flagURL }} -->
     <!-- {{ country.name.common }}  -->
   <img class="chosenFlag" alt="Flag image" :src="baseFlagURL" >  
</template>


<style scoped>
  .chosenFlag {
    width: 200px;
  }
</style>