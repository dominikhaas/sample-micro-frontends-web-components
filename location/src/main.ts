import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {createPinia} from "pinia";

import { defineCustomElement } from "vue";

loadFonts()

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .mount('#app')

const locationApp = defineCustomElement(App)
customElements.define('location-app', locationApp)
