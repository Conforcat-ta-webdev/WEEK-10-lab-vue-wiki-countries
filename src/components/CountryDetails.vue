
<template>     
 <div class="col-7">
  <div v-for="country in countries" :key="country.alpha3Code">
    <div v-if="$route.params.id === country.alpha3Code">
      <img :src="'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png'" style="width: 300px"/>
          <h1>{{country.name.common}}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{ country.capital[0] }}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{ country.area }} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                      <ul v-for="border in country.borders" :key="border">
                      <div v-for="bordercountries in countries" :key="country.alpha3Code">
                       <li v-if="border === bordercountries.alpha3Code">
                      <router-link :to="bordercountries.alpha3Code">{{ bordercountries.name.common }}</router-link></li>
                      </div>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

          <router-view />
</template>

<script setup>

import countries from './../countries.json';

</script>

<style>

</style>