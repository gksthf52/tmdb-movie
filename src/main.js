import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import './registerServiceWorker'

createApp(App).use(router, store).mount('#app')
