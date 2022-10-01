<template>
  
    <div class="container">
        <div class="row">
            <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <ul class="list-group">
          <router-link :countries="countries" v-for="country in countries" :key="country.id" :to="country.alpha3Code">
        <li class="list-group-item" >
          <img bandera de mayuscula a minuscula>
          <a href=""><country-flag :country='country.alpha2Code' size='big'/></a>
            <h3 >{{ country.name.common }} </h3>
    </li>
  </router-link>
    </ul>

        
        
    </div>
    </div>

</div>
</template>





<script setup>
    
    import CountryDetails from "./CountryDetails.vue"
    import { defineProps, ref } from "vue"
    import CountryFlag from 'vue-country-flag-next'

  




   
const props = defineProps({
        countries: {
            type:Array
        },
        
    });
  


       </script>

