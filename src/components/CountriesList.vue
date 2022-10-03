<script setup>
// import countries from "../countries.json";
import { ref, reactive, onMounted } from "vue";

const countries = reactive({ list: [] });
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
    if (res.ok) countries.list = await res.json();
    if (!res.ok) error.value = "Error - API unavailable";
    loading.value = !loading.value;
  } catch (error) {
    error.value = "Error - API unavailable";
    loading.value = !loading.value;
  }
});
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <p v-if="loading">fetching... :)</p>
  <RouterLink
    v-for="country in countries.list"
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
