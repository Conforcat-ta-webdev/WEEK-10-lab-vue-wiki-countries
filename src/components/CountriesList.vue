<script setup>
import countries from './../countries.json';

</script>

<template>
    <div class="container">
        <h1>--- I'm the countries list ----</h1>


        <div class="row">
            <div class="col">
                <div class="border" v-for="country in countries" :key="country.alpha3Code">
                    <img :src=" 'https://flagpedia.net/data/flags/icon/72x54/'+ country.alpha2Code.toLowerCase() + '.png' ">
                    
                    <p></p> 
                    <p>{{country.name.common}}</p>
                </div>
            </div>
            <div class="col">
                x
            </div>


        </div>


        <p>{{countries.length}}</p>


    </div>
</template>