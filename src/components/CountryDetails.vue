<script setup>
    import countries from './../countries.json';
    /*import { useRoute } from 'vue-router';
    const route = useRoute();  
    const code = route.params.code; 
    */
</script>


<template>
    <div class="col-7">
        <div v-for="country in countries" :key="country.alpha3Code">
            <div v-if="$route.params.id === country.alpha3Code"> <!--Router view Iteracion 1.4 if we want the country details clicked to be displayed from the list -->
                <!--<img
                src="https://restcountries.eu/data/fra.svg"
                alt="country flag"
                style="width: 300px"
                />-->
                <img
                    :src="
                    'https://flagpedia.net/data/flags/icon/72x54/' +
                    country.alpha2Code.toLowerCase() +
                    '.png'"
                />
                <h1>{{country.name.common}}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style="width: 30%">Capital</td>
                            <td>{{ country.capital[0] }}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{{ country.area }} km <sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                            <ul>
                                <li v-for="border in country.borders" :key="border">
                                    <router-link :to="border">{{ border }}</router-link>
                                </li>                
                            </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>