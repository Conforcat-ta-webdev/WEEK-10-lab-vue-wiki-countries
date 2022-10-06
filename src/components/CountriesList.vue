<template>
    <input class="input" type="search" v-model="cerca" placeholder="Filter..." />
    <RouterLink 
        v-for="(country, index) in arCountries.ar" 
        :key="index" 
        :to="country.alpha3Code"
        class="list-group-item list-group-item-action"
        v-show="country.name.common.toLowerCase().includes(cerca.toLowerCase())"
    >
        <img 
            className="flag"
            :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
        <h2 className="country-name">{{ country.name.common }}</h2>
    </RouterLink>
</template>
<script setup>
import { reactive, onMounted, ref } from 'vue';

const arCountries = reactive({ ar: [] });
const cerca = ref('');

onMounted(async () => {
    try {
        let result = await fetch("https://ih-countries-api.herokuapp.com/countries");
        if (result.ok) arCountries.ar = await result.json();
        else alert("Error fetching the countries data");

    } catch (err) {
        alert("Error fetching the countries data");
    }
})
</script>
<style>
.flag {
    width: 20px;
    height: 12px;
}

.country-name {
    color: black;
    font-size: 20px;
    font-weight: 300;
}
</style>
  