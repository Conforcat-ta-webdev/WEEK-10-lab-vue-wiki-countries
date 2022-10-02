
<script setup>
import { ref, watch, onUpdated, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import countries from "../countries.json";

const route = useRoute()

const baseFlagURL = ref('');
const myCountry = ref({});


//Initialize myCountry to avoind undefined loading error before object is fetched (ref should do though???)
 myCountry.value = { name: {
                             common: ''
                           },
                     capital: [''],
                     area: ''
                   }

async function getCountry() {
  const countryURL = 'https://ih-countries-api.herokuapp.com/countries/'.concat(route.params.countries);
  const response = await fetch(countryURL)
  if(response.ok) {
    const json = await response.json()
    myCountry.value = json
    baseFlagURL.value = 'https://flagpedia.net/data/flags/icon/72x54/ALPHA2.png'.replace('ALPHA2', myCountry.value.alpha2Code.toLowerCase());
  }
}

getCountry();

onUpdated( () => getCountry() );

  </script>

<template>
  <div >
    <div class="card" style="width: 30rem; margin-left: 140px;">
      <img :src="baseFlagURL" class="card-img-top" alt="Flag image"> 
      <div class="card-body">
        <h1 class="card-title text-center">{{ myCountry.name.common }}</h1>  
        <br>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h6>Capital</h6>
            </div>
            <div class="col">
              <h6>{{ myCountry.capital[0] }}</h6> 
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h6>Area</h6>
            </div>
            <div class="col">
              <h6>{{ myCountry.area }} km2</h6> 
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h6>Borders</h6>
            </div>
            <div class="col">
              <h6>
                <RouterLink 
                v-for="countryCode in myCountry.borders" 
                :to="{ name: 'details', params: { countries: countryCode } }" >
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-action">
                      {{ countryCode  }}


                    </li>
                  </ul>
                </RouterLink>
              </h6>
            </div>
          </div>
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