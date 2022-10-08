<script setup>
  import countries from "../countries.json"
  import { useRoute } from 'vue-router'
  import { computed, watch } from 'vue';

  console.log(countries);
  console.log(countries[0].name.common);

  const route = useRoute()
  let country = computed(() => countries.filter(country => country.alpha3Code === route.params.index))

  
  watch(route, newValue => {
    country = countries.filter(country => country.alpha3Code === newValue.params.index)
  });

  function getBorderName(border) {
    let borderCountry = countries.filter(country => country.alpha3Code === border).shift();
    return borderCountry.name.common;
  }

  </script>

<template>
  <div class="col-7">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`"
      alt="country flag"
      style="width: 100px"
    />
    <h1>{{ country[0].name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country[0].capital.toString() }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country[0].area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul >
              <li v-for="border in country[0].borders" :key="border">
                <RouterLink :to="border">{{ getBorderName(border) }}</RouterLink>
              </li>   
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script></script>

<style></style>
