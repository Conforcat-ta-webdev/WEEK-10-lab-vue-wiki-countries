<script>

import countries from "../countries.json";

export default {
  name: 'CountryDetails',
  props: {
    countryCode: String
  },
  methods: {
    getCountry(ctryCode) {
      return countries.find(function(country) {
        if(country.alpha3Code == ctryCode) {
          return country;
        }
        return null;
      });
    }
  }
};
</script>

<template>
  <div :set="country = getCountry(countryCode)">
    <span>{{ country.name.common }}</span>
    <img :src="'https://flagpedia.net/data/flags/icon/216x162/' + country.alpha2Code.toLowerCase() + '.png'"/>

    <table>
      <tbody>
        <tr>
          <td>
            <span>Capital</span>
          </td>
          <td>
            <span v-for="capital in country.capital">
              {{ capital }} <br>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Area</span>
          </td>
          <td>
            <span>
              {{ country.area }} km<sup>2</sup><br>
            </span>
          </td>
        </tr>
        <tr>
          <td> 
            <span>Borders</span>
          </td>
          <td>
            <span v-for="border in country.borders">
              <router-link :to="border">{{ getCountry(border).name.common }} <br></router-link>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
</style>
