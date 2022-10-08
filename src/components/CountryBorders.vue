<template>
  <ul>
    <li v-for="border in borders" v-bind:key="border">
      <router-link :to="getLinkToDetails(border)">{{
        getCountryName(border)
      }}</router-link>
    </li>
  </ul>
</template>
<script>
import countriesJson from "../countries.json";
export default {
  props: {
    borders: Array,
  },
  methods: {
    getCountryName(alpha3Code) {
      return [...countriesJson].filter((c) => c.alpha3Code === alpha3Code)[0]
        ?.name.common;
    },
    getLinkToDetails(alpha3Code) {
      return "/list/" + alpha3Code;
    },
  },
};
</script>
<style scope>
li {
  list-style-type: none;
}
</style>
