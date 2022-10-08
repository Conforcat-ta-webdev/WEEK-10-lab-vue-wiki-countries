<script>
export default {
  name: 'CountriesList',
  props: {
    countries: Object,
  }
};
</script>

<template>
  <table>
    <tbody>
      <tr v-for="country in countries">
        <td>
          <router-link :to="'/' + country.alpha3Code">
            <img :src="'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png'"/>
            <br>
            <span>{{ country.name.common }}</span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
