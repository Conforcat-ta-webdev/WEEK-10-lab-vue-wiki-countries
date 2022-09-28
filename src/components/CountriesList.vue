<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

    const props = defineProps({
        countries: {
            type: Array,
            required: true,
        },
        
})

const baseFlagURL = 'https://flagpedia.net/data/flags/icon/72x54/ALPHA2.png';
const ALPHA2 = "ALPHA2"



</script>


<template>
    <RouterLink 
        v-for="country in countries" :key="country.alpha3Code"
        :to="{ name: 'details', params: { countries: country.alpha3Code } }" >
        <ul class="list-group">
            <ui class="list-group-item list-group-item-action">
                <p>{{ country.name.common  }}</p>
                <img alt="Country Flag" 
                :src="baseFlagURL.replace(ALPHA2,country.alpha2Code.toLowerCase())"
                >
                <p></p>
                <br>
            </ui>
        </ul>
    </RouterLink>
</template> 

