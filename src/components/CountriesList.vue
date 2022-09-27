<script setup>

    const props = defineProps({
        countries: {
      type: Array,
      required: true,
    },
})

console.log(props.countries[0])
</script>


<template>
    <RouterLink 
        v-for="country in props.countries" :key="country.name.alpha3Code" 
        :to="{ name: 'root' }">
        {{ country.name.common  }}
    </RouterLink>
    
    <!-- <RouterLink :to="{ name: 'details', params: { country: country.name.alpha3Code } }">Countries Details</RouterLink>  -->
</template> 

