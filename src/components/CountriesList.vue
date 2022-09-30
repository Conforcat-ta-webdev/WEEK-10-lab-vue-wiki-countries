<script setup>
import { ref, reactive, onMounted } from "vue"

// ?? xk al poner 'countries' como 'ref' sí funcionaba y con 'reactive' no?
// -> con 'reactive' hemos de definir una key y la respuesta del fetch asociarla a esta key
//     ya que sino al hacer 'countries = json' sobreescribía la variable reactiva y se perdía la reactividad
const countries = reactive({list: []})
// const countries = ref(null) --> con 'ref' tamb funciona
const loading = ref(true);
const error = ref(null)

// ?? mejor definir las variables con 'const' o con 'let'?
// -> las variables 'ref' o 'reactivas' mejor con const xk, por ejemplo, 
//     luego te pueden sobreescribr la variable y pierda la reactividad, como me ha pasado

onMounted(async () => {
    try {
        const res = await fetch("https://ih-countries-api.herokuapp.com/countries")
        if (res.ok) countries.list = await res.json()
        if (!res.ok) error.value = "Error! Could not reach the API."
        loading.value = !loading.value
    } catch (error) {
        error.value = "Error! Could not reach the API."
        loading.value = !loading.value
    }
})
</script>

<template>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading info...</p>
    <RouterLink
        v-for="country in countries.list"
        :key="country._id"
        class="list-group-item list-group-item-action"
        :to="country.alpha3Code"
    >
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
        <p>{{ country.name.common }}</p>
    </RouterLink>
</template>