<template>
  <div className="app">
    <Nabvar></Nabvar>

    <div class="container">
      <div class="row row-aux">
        <div class="col-4 countries-list">
          <div class="list-group">
            <CountriesList />
          </div>

        </div>
        <div class="col-8">
          <RouterView />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import Nabvar from './components/Nabvar.vue';
import CountriesList from './components/CountriesList.vue';
</script>

<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.countries-list {
  height: calc(100vh - 100px);
  overflow: scroll;
}

.container {
  padding-left: 70px;
  padding-right: 70px;
  margin: 0;
  max-width: 100wv;
}

.row-aux {
  width: 100%;
}
</style>
