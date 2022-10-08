<template>
  <div class="col-4" style="max-height: 90vh; overflow: scroll">
    <div class="list-group text-center">
      <CountriesListCode
        v-for="country in countries"
        v-bind:key="country.alpha3Code"
        :name="country?.name?.common"
        :alpha2Code="country.alpha2Code"
        :alpha3Code="country.alpha3Code"
      />
    </div>
  </div>
</template>
<script>
import CountriesListCode from "./CountriesListCode.vue";
import countriesJson from "../countries.json";
export default {
  data() {
    return {
      countries: [],
    };
  },
  props: {
    countryList: Array,
  },
  components: { CountriesListCode },
  methods: {
    fetchCountries() {
      return countriesJson;
    },
  },
  mounted() {
    this.countries = this.fetchCountries();
    this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  },
};
</script>
