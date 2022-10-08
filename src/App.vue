<script setup>
  import Navbar from './components/Navbar.vue';
  import CountriesList from './components/CountriesList.vue';
  import { RouterView } from 'vue-router';

</script>
  
  <template>
    <div class="app">
      <Navbar />
      <div class="container">
          <div class="row">
            <CountriesList />
            <RouterView />
          </div>
      </div>
    </div>
  </template>
  
  