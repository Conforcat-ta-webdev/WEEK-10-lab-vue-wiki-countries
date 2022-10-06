<template>
    <p v-if="carregant" class="loading">Loading...</p>
    <div v-if="paisSeleccionat !== null">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${paisSeleccionat.alpha2Code.toLowerCase()}.png`"
            alt="flag" class="flag" />
        <h1>{{ paisSeleccionat.name.common }}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td class="table-key">Capital</td>
                    <td class="table-value">{{ paisSeleccionat.capital.join(', ') }}</td>
                </tr>
                <tr>
                    <td class="table-key">Area</td>
                    <td class="table-value">
                        {{ paisSeleccionat.area }} km <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td class="table-key">Borders</td>
                    <td>
                        <ul>
                            <li v-for="(border, index) in paisSeleccionat.borders" :key="index" class="border">
                                <RouterLink :to="border">{{ border }}</RouterLink>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue';

const carregant = ref(true);
const route = useRoute()
const paisSeleccionat = ref(null)
const fetchUrl = computed(() => `https://ih-countries-api.herokuapp.com/countries/${route.params.id}`)

function obtenirDadesPais() {
    carregant.value = true;
    fetch(fetchUrl.value)
        .then(result => {
            if (result.ok) {
                carregant.value = !carregant;
                return result.json();
            }
            else {
                alert(`Error fetching ${route.params.id} data`);
                carregant = false;
            }
        })
        .then(data => {paisSeleccionat.value = data; 
            console.log(paisSeleccionat.alpha2Code);
            carregant.value = false})
        .catch(err => {alert(err); carregant.value = false});
}

onMounted(() => obtenirDadesPais());

watch(route => obtenirDadesPais());
</script>
<style>
.flag {
    width: 72px;
    height: 53px;
}

.table-key {
    width: 35%;
    color: black;
}

.table-value {
    width: 65%;
    color: black;
}

.border {
    color: rgb(24, 101, 245);
    text-decoration: underline;
}

.border :hover {
    color: rgb(24, 76, 245);
    ;
}
</style>