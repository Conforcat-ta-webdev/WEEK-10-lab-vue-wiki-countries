<script setup>
import countries from "./../../public/countries.json";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="col-7">
    <div v-for="(country, index) in countries" :key="index">
      <div v-if="$route.params.id === country.alpha3Code">
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          style="width: 50px"
        />
        <h1>{{ country.name.common }}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style="width: 30%">Capital</td>
              <td>
                {{ country.capital[0] }}
              </td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{{ country.area }}km <sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul v-for="border in country.borders" :key="border">
                  <div
                    v-for="(borderCountries, index) in countries"
                    :key="index"
                  >
                    <li v-if="border === borderCountries.alpha3Code">
                      <router-link :to="borderCountries.alpha3Code">{{
                        borderCountries.name.common
                      }}</router-link>
                    </li>
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
