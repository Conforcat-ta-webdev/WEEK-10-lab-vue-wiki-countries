<script setup>

import { RouterLink } from 'vue-router';

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
    <div class="col-md-6 country-list" >
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
                <br>
            </li>
        </ul>
     </RouterLink>
    </div>
</template> 

<style scoped>
    .country-list {
        height: 70vh
    }
</style>