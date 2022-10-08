<template>
    <div class="col-7">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 300px"/>
        <h1>{{country.name.common}}</h1>
        <table class="table">
            <tbody>
            <tr>
                <td style="width: 30%">Capital: </td>
                <td v-for="(capital, index) in country.capital" :key="index">{{capital}}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>
                 {{country.area}}<sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                <ul v-for="(border, index) in country.borders" :key="index">
                    <li><a href="/AND">{{border}}</a></li>                    
                </ul>  
                </td>
            </tr>
            </tbody>
        </table>
          </div>
</template>

<script setup>
import countries from "../countries.json"
import {useRoute} from 'vue-router'
import {computed} from "vue"

const route = useRoute();

const country = computed(() =>{
    return countries.find((code) =>{
        return code.alpha3Code === route.params.code
    })
})
</script>

<style>
</style>

