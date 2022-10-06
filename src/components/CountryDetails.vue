<template>
   <div class="container">
            <div class="col-7"   >
            <h2> {{ country.name.common}}</h2>
            <table class="table" >
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%"> Capital : </td>
                  <td>{{ country.capital[0] }}</td>
                </tr>
                <tr>
                  <td>Area : </td>
                  <td>
                    {{ country.area }} km <sup>2</sup>
                    </td>
                </tr>

                <tr>
                  <td> Borders</td>
                  <td>
                    <ul :countries="countries"  >
                      <li  >
                        {{ country.borders}}</li>
                      
                    </ul>  
                  </td>
                </tr>
            
                <tr>
                  <td>Alpa3Code: </td>
                  <td>
                    <strong>{{ country.alpha3Code }}  </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script setup>
 import countries from "../countries.json"
  import { useRoute } from 'vue-router'
import {  computed } from "vue"

  const route = useRoute();

  const country = computed(()=>{
    return countries.find((c)=>{
    return c.alpha3Code === route.params.code 
    } ) 
  }) ;
  console.log(country)

    </script>

    <style>
      .containerT {
      flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
  }
  .col-7{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
 
      </style>