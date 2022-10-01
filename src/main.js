import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import CountryFlag from 'vue-country-flag-next'



import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')
