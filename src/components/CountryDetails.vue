<script setup>
import countries from "../countries.json"
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue';

const route = useRoute()
let country = computed(() => countries.filter(country => country.alpha3Code === route.params.id))

watch(route, newValue => {
    country = countries.filter(country => country.alpha3Code === newValue.params.id)
})
</script>

<template>
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 100px"/>
    <h1>{{ country[0].name.common }}</h1>
    <table class="table">
        <thead></thead>
        <tbody>
        <tr>
            <td style="width: 30%">Capital</td>
            <td>{{ country[0].capital.join(', ') }}</td>
        </tr>
        <tr>
            <td>Area</td>
            <td>
                {{ country[0].area }} km <sup>2</sup>
            </td>
        </tr>
        <tr>
            <td>Borders</td>
            <td>
            <ul>
                <li v-for="border in country[0].borders" :key="border">
                    <RouterLink :to="border">{{ border }}</RouterLink>
                </li>                
            </ul>  
            </td>
        </tr>
        </tbody>
    </table>
</template>