<script setup>
    import countries from "../countries.json"
    import { useRoute } from 'vue-router'
    import { reactive } from 'vue';
    
    function getCountryByCode(code) {
        const validCountries = countries.filter((country) => {
            return code === country.alpha3Code
        })
        if(validCountries) {
            return validCountries[0]
        }
    }

    const route = useRoute()
    const country = reactive(getCountryByCode(route.params.code));
    
</script>

<template>
    <div class="col-7">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 100px"/>
        <h1> {{ country.name.common }}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{ country.capital }}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                    {{ country.area }} km <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <div v-for="countryBorder in countries" :key="country.alpha3Code">
                            <div v-for="(border, index) in country.borders" :key="index">
                                <div v-if="border === countryBorder.alpha3Code">
                                    <RouterLink :to="border">{{ countryBorder.name.common }}</RouterLink>
                                </div>
                            </div>  
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

