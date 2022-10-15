<script setup>
  import countries from "../countries.json"
  import { useRoute } from 'vue-router'
  import { computed, watch, ref, onMounted } from 'vue';
  import axios from 'axios';

  
  const route = useRoute()
  const urlAdress = computed(() => `https://ih-countries-api.herokuapp.com/countries/${route.params.index}`)
  const country = ref('')


  function getData(){
    axios.get(urlAdress.value.toString())
    .then( response => {
      country.value = response.data;
    })
    .catch( error => console.log(error));
  }

  watch(() => country.value, () =>  getData())
  onMounted(() => getData())
  
  function getBorderName(border) {
    let borderCountry = countries.filter(country => country.alpha3Code === border).shift();
    return borderCountry.name.common;
  }


</script>

<template>

<div class="col-7" v-if="country">
    <img 
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png`"
      alt="country flag"
      style="width: 100px"
    />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital.toString() }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul >
              <li v-for="border in country.borders" :key="border">
                <RouterLink :to="border">{{ getBorderName(border) }}</RouterLink>
              </li>   
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
</div>



</template>
