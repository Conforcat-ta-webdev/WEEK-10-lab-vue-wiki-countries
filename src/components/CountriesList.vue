<script setup>
import { ref, reactive, onMounted } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const countries = reactive({ list: [] });
const loading = ref(true);
const error = ref(null);
const query = ref("");
const search = ref("");
const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

onMounted(async () => {
  try {
    const res = await fetch(apiUrl);
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
  <LoadingSpinner v-if="loading" />
  <TransitionGroup name="list">
    <p v-if="error">{{ error }}</p>
    <p v-if="loading" class="fetch-method">fetching... 🫣</p>
    <input
      v-if="!loading"
      v-model="search"
      placeholder="please enter country name"
      class="country-search"
    />
    <RouterLink
      v-for="country in countries.list"
      :key="country._id"
      class="list-group-item list-group-item-action"
      :to="country.alpha3Code"
      v-show="country.name.common.toLowerCase().includes(search.toLowerCase())"
    >
      <loader :active="loaderActive" message="Please wait 5 seconds" />
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      />
      <p>{{ country.name.common }}</p>
    </RouterLink>
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fetch-method {
  position: absolute;
  top: 159px;
  left: 180px;
}

li {
  padding-top: 0.5em;
}

.country-search {
  position: absolute;
  top: 100px;
  right: 75px;
  width: 285px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  text-align: center;
}
</style>
