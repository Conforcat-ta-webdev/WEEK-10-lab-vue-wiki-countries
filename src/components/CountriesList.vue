<template>
    <!-- Countries List (Bootstrap column) -->
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
        <router-link :to="country.alpha3Code" v-for="country in countries" :key="country.alpha3Code"
        class="list-group-item list-group-item-action">      
        <img :src="
            'https://flagpedia.net/data/flags/icon/72x54/' +
            country.alpha2Code.toLowerCase() + '.png'"/>
        <p>{{ country.name.common }}</p>

    </router-link>
    <router-view />
</div>
</div>
</template>    

<script setup>
import countries from './../countries.json';

</script>
