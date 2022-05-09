import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/router'
import store from './assets/store.js'
import './assets/registerServiceWorker'

createApp(App).use(router, store).mount('#app')
