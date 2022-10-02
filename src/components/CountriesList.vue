<script setup>

import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';

    const props = defineProps({
        countries: {
            type: Array,
            required: false,
        },
        
})

const baseFlagURL = 'https://flagpedia.net/data/flags/icon/72x54/ALPHA2.png';
const ALPHA2 = "ALPHA2"

</script>


<template>

<div class="row">
  <div class="col-6" style="height: 100%; max-height: 85vh; overflow-y: scroll;">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">
        <RouterLink 
        v-for="country in countries" :key="country.alpha3Code"
        :to="{ name: 'details', params: { countries: country.alpha3Code } }" >
        <ul class="list-group">
            <li class="list-group-item list-group-item-action">
                <p>{{ country.name.common  }}</p>
                <img alt="Country Flag" 
                :src="baseFlagURL.replace(ALPHA2,country.alpha2Code.toLowerCase())"
                >
                <p></p>
            </li>
        </ul>
     </RouterLink>
      </h4>
      <p>...</p>
    </div>
  </div>
  <div class="col-4">
  <RouterView></RouterView>
</div>
</div>
</template> 

<style scoped>
    .country-list {
        height: 70vh
    }
</style>