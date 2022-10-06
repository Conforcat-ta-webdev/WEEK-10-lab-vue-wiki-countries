<template>

    <div class="container">

        <div class="row">
            <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <ul class="list-group">
          <router-link :countries="countries" v-for="country in countries" :key="country.id" :to="country.alpha3Code" >
        <li class="list-group-item" >
          <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
            <h3 >{{ country.name.common }} </h3>
        </li>
  </router-link>
  

    </ul>

        
        
    </div>
    </div>
 
</div>

</template>





<script setup>
    import { defineProps, ref } from "vue"

import CountryDetails from "./CountryDetails.vue";








   
const props = defineProps({
        countries: {
            type:Array
        },

    });
       </script>

<style>
.containerT{
  flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
}


</style>