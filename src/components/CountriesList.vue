<template>
  <div
    v-if="this.countries"
    class="col-5"
    style="max-height: 90vh; overflow: scroll"
  >
    <div class="list-group text-center">
      <CountryListItem
        v-for="country in countries"
        v-bind:key="country.alpha3Code"
        :name="country?.name?.common"
        :alpha2Code="country.alpha2Code"
        :alpha3Code="country.alpha3Code"
      />
    </div>
  </div>
  <SpinnerText v-else text="Loading countries" />
</template>
  <script>
import CountryListItem from "./CountryListItem.vue";
//import countriesJson from "../countries.json";
import * as countriesAPI from "../api/countriesApi.js";
import SpinnerText from "./SpinnerText.vue";
export default {
  data() {
    return {
      countries: null,
    };
  },
  props: {
    countryList: Array,
  },
  components: { CountryListItem, SpinnerText },
  methods: {
    async fetchCountries() {
      return countriesAPI.sortCountries(await countriesAPI.getAllCountries());
    },
    flag() {
      return `https://flagcdn.com/w320/${this.country.alpha2Code?.toLowerCase()}.png`;
    },
  },
  async mounted() {
    this.countries = await this.fetchCountries();
  },
};
</script>
<style scoped></style>