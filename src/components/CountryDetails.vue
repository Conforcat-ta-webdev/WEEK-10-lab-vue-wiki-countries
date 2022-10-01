<script>
import countries from "./../countries.json";

export default {
  data() {
    return {
      countries: countries,
      borderCountriesNames: [],
      borderCountriesCodes: [],
    };
  },
  methods: {
    getCountryName() {
      countries.forEach((country) => {
        if (this.$route.params.code === country.alpha3Code) {
          country.borders.forEach((borderCountryCode) => {
            this.borderCountriesCodes.push(borderCountryCode);
            return this.borderCountriesCodes;
          });
        }
      });

      fetch("./../countries.json")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.borderCountriesCodes.forEach((countryCode) => {
            for (let i = 0; i < json.length; i++) {
              if (countryCode === json[i].alpha3Code) {
                this.borderCountriesNames.push(json[i].name.common);
                return this.borderCountriesNames;
              }
            }
          });
        })
        .catch(function () {
          this.dataError = true;
        });
    },
  },
  mounted() {
    this.getCountryName();
  },
};
</script>

<template>
  <div class="col-7" v-for="country in countries" :key="country.alpha3Code">
    <div
      v-if="this.$route.params.code === country.alpha3Code"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        :src="
          'https://flagpedia.net/data/flags/icon/72x54/' +
          country.alpha2Code.toLowerCase() +
          '.png'
        "
        class="mb-4"
        style="width: 200px"
      />
      <h1 class="font-weight-bold">{{ country.name.common }}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td class="font-weight-bold" style="width: 30%">Capital</td>
            <td v-for="capital in country.capital">{{ capital }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Area</td>
            <td>{{ country.area }} km <sup>2</sup></td>
          </tr>
          <tr>
            <td class="font-weight-bold">Borders</td>
            <td>
              <div>
                <ul v-for="(borderCountryName, index) in borderCountriesNames">
                  <RouterLink
                    :to="{
                      name: 'details',
                      params: { code: borderCountriesCodes[index] },
                    }"
                    >{{ borderCountryName }}</RouterLink
                  >
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
