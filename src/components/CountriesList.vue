<script>
export default {
  data() {},
  props: {
    countries: Object,
  },
};
</script>

<template>
  <div class="list-group m-3">
    <div
      v-for="country in countries"
      class="list-group-item"
      :key="country.alpha3Code"
    >
      <RouterLink
        :to="{ name: 'details', params: { code: country.alpha3Code } }"
        class="d-flex flex-column justify-content-center align-items-center text-decoration-none"
        ><img
          class="mb-3"
          style="max-width: 50px"
          :src="
            'https://flagpedia.net/data/flags/icon/72x54/' +
            country.alpha2Code.toLowerCase() +
            '.png'
          "
        />
        {{ country.name.common }}
      </RouterLink>
    </div>
  </div>
</template>


<style>
    
.list-group-item:hover {
    background-color: #f0f1d2;
}
</style>