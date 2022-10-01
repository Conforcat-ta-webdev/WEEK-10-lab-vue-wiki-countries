<script setup>
    import { useRouter } from 'vue-router';
    import { computed } from 'vue'
    const route = useRouter()
    const country = computed(() => {
        return getCountryByCode(route.params.code);
    })
    
</script>
<template>
    <div class="col-7">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 100px"/>
            <h1>{{ country.name.common }}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{ country.capital[0] }}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{ country.area }} <sup>2</sup>
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
