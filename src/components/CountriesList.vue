<script setup>
import countries from "./../../public/countries.json";
import CountryDetails from "./CountryDetails.vue";

defineProps({
  countries: Object,
});

countries.sort((a, b) => {
  if (a.name.common > b.name.common) return 1;
  if (a.name.common < b.name.common) return -1;
  return 0;
});
</script>

<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <router-link
        :to="country.alpha3Code"
        v-for="(country, index) in countries"
        :key="index"
        class="list-group-item list-group-item-action"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          alt="Flags"
        />
        <p>{{ country.name.common }}</p>
      </router-link>
    </div>
  </div>
</template>
