<script setup>
import Navbar from './components/Navbar.vue';
import CountriesList from './components/CountriesList.vue';
import countries from "./countries.json";
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';

/*
onMounted(() => {
  const url ='https://ih-countries-api.herokuapp.com/countries';
  //const countries = [];

  fetch(url)
    .then(response => {
          if(response.ok) return response.json();
    })
    .then(json => {

        json.forEach((country) => countries[country] = country ) ;
    })
})
*/

</script>

<template>
  <div class="app">
    <Navbar />
  
    <div className="container">
      <div className="row" >
        <CountriesList :countries="countries" /> 
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-link {
  color: #61dafb;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
