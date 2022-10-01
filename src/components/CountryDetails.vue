<template>
  <!-- Country Details (Bootstrap column) -->
  <div v-if="alphaCode && country" class="col-7 text-center">
    <img :src="flag" alt="country flag" style="width: 300px" />
    <h1>{{ this.country.name?.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ this.country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <CountryBorders :borders="this.country.borders" />
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="col-7 text-center">
    <SpinnerText text="Loading country details" />
  </div>
</template>

<script>
//import countriesJson from "../countries.json";
import CountryBorders from "./CountryBorders.vue";
import { getCountryByAlpha3Code } from "../api/countriesApi";
import SpinnerText from "./SpinnerText.vue";
export default {
  props: {
    // country: Object,
  },
  data() {
    return {
      country: null,
    };
  },
  async mounted() {
    this.country = await getCountryByAlpha3Code(this.alphaCode);
  },
  watch: {
    async alphaCode(newAlphaCode) {
      this.country = await getCountryByAlpha3Code(newAlphaCode);
    },
  },
  computed: {
    alphaCode() {
      return this.$route.params.alphaCode;
    },
    capital() {
      return this.country?.capital?.[0];
    },
    flag() {
      return `https://flagcdn.com/w320/${this.country.alpha2Code?.toLowerCase()}.png`;
    },
  },
  components: { CountryBorders, SpinnerText },
};
</script>
<style scoped>
</style>