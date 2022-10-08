<template>
  <div v-if="alphaCode" class="col-7 text-center">
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
</template>
<script>
import countriesJson from "../countries.json";
import CountryBorders from "../components/CountryBorders.vue";
export default {
  props: {
    // country: Object,
  },
  data() {
    return {
      country: null,
    };
  },
  created() {
    this.country = this.fetchCountry();
  },
  updated() {;
    this.country = this.fetchCountry();
  },
  methods: {
    fetchCountry() {
      return [...countriesJson].filter(
        (c) => this.alphaCode === c.alpha3Code
      )[0];
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
  components: { CountryBorders },
};
</script>
