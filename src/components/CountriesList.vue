<script setup>

const props = defineProps({
  countries: Object
});

const image = `https://flagpedia.net/data/flags/icon/72x54/${props.countries.alpha2Code.toLowerCase()}.png`;

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link class="list-group-item list-group-item-action" :to="root">
            <img :src="image" />
            <p>{{ countries.name.common }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
