<script setup>
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";
import CountryDetails from "./components/CountryDetails.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-4" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <CountriesList />
          </div>
        </div>
        <div class="col-7">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}
.navbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 35px;
}

.col-7 {
  display: flex;
  width: 58.33333333%;
  align-content: center;
  justify-content: center;
  align-items: center;
}

a.list-group-item {
  padding-top: 30px;
}

.row {
  display: flex;
  justify-content: space-between;
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

.navbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 35px;
}
/* 
@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */

/* .list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
</style>
