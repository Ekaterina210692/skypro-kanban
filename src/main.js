import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseModal from './components/basecomop/BaseModal.vue';

const app = createApp(App)

app.use(router)

app.component('BaseModal', BaseModal);

app.mount('#app')
