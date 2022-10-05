<script setup>
    const props = defineProps({
        countries: {
        type: Object,
      },
    });
</script>

<template>
    <div class="list-group m-3"> <!--Change-->
        <div
        v-for="country in countries"
        class="list-group-item p-5"
        :key="country.alpha3Code"
        >
    
        <RouterLink
            :to="{ name: 'details', params: { code: country.alpha3Code } }"
            class="d-flex flex-column justify-content-center align-items-center text-decoration-none"
            ><img
                class="mb-3"
                style="max-width: 50px"
                :src="
                'https://flagpedia.net/data/flags/icon/72x54/' +
                country.alpha2Code.toLowerCase() +
                '.png' "
            />
            <p>{{ country.name.common }}</p>
        </RouterLink>
    </div>
  </div>
</template>


<style scoped>

</style>