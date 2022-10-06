<script setup>
    import countries from './../countries.json';
    
</script>


<template> <!--From Example.html-->
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
                            <ul v-for="border in country.borders" :key="border">
                                <div v-for="bordercountries in countries" :key="country.alpha3Code">
                                    <li v-if="border === bordercountries.alpha3Code">
                                        <router-link :to="bordercountries.alpha3Code">{{ bordercountries.name.common }}</router-link> <!--using routerlink 
                                            to get border details in common name-->
                                    </li>  
                                </div>              
                            </ul>
                            <!--<ul>
                                <li v-for="border in country.borders" :key="border">
                                    <router-link :to="border">{{ border }}</router-link> How can I change to full name instead of alpha3code?????
                                </li>                
                            </ul>-->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>