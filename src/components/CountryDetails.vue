<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue';

const route = useRoute()
const country = ref(null)
const loading = ref(true)
const error = ref(null)
// ?? xk al poner 'apiUrl' con 'computed' sí funciona y con 'ref' o 'reactive' no?
// -> xk comuted cambia en base a una variable ref o reactive, que es lo que sería route
const apiUrl = computed(() => `https://ih-countries-api.herokuapp.com/countries/${route.params.id}`)

function fetchData() {
    fetch(apiUrl.value)
        .then(res => {
            if (!res.ok) error.value = "Error! Could not reach the API."
            return res.json()
        })
        .then(data => country.value = data)
        .catch(err => error.value = err)
        .then(() => loading.value = false)
}
    
onMounted(() => fetchData())

watch(route => fetchData())
</script>

<template>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading info...</p>
    <div v-if="country">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 100px"/>
        <h1>{{ country.name.common }}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{ country.capital.join(', ') }}</td>
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
                        <ul>
                            <li v-for="border in country.borders" :key="border">
                                <RouterLink :to="border">{{ border }}</RouterLink>
                            </li>                
                        </ul>  
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>