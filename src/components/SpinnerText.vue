<template>
  <div class="loading">
    <span class="loading__text">
      {{ text }}
    </span>
    <Spinner />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
  components: { Spinner },
  props: {
    text: String,
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.loading__text {
  font-size: 1.5rem;
  margin-right: 1rem;
}
</style>