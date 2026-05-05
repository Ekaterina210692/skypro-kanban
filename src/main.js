import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseModal from './components/basecomop/BaseModal.vue';
import CalendarForm from './components/form/CalendarForm.vue';

const app = createApp(App)

app.use(router)

app.component('BaseModal', BaseModal);

app.component('CalendarForm', CalendarForm)

app.mount('#app')
