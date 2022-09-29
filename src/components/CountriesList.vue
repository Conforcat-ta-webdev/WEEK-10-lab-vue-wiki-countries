<script setup>

const props = defineProps({
  country: Object
});

const image = `https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`;

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh;">
        <div class="list-group">
          <router-link class="list-group-item list-group-item-action" :to="{ name: 'details' }">
            <img :src="image" />
            <p>{{ country.name.common }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>



