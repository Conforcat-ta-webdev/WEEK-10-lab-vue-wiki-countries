<script setup>
import countries from "../countries.json";
</script>

<template>
  <RouterLink
    v-for="country in countries"
    :key="country._id"
    class="list-group-item list-group-item-action"
    :to="country.alpha3Code"
  >
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
    />
    <p>{{ country.name.common }}</p>
  </RouterLink>
</template>
