<script setup>
defineProps({
  title: String,
});

const title = "WikiCountries";
</script>

<template>
  <nav class="navbar navbar-dark bg-primary mb-3">
    <div class="container">
      <span class="navbar-brand">{{ title }}</span>
    </div>
  </nav>
</template>
