<template>
            <div class="col-7" >
           
            <table class="table">
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
                <template>
                <tr>
                  <td> Borders</td>
                  <td>
                    <ul >
                      <li  >
                        <a href=" ">{{ country.borders }}</a></li>
                      
                    </ul>  
                  </td>
                </tr>
              </template>
                <tr>
                  <td>Alpa3Code: </td>
                  <td>
                    <strong>{{ country.alpha3Code }}  </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>

<script setup>
 import countries from "./../countries.json"

  import { defineProps } from "vue"
 
   
const props = defineProps({
        countries: {
            type:Array
        },
        
    });
    
   
     



    </script>