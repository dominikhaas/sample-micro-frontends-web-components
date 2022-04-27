import { createApp } from "vue";
import App from "./App.ce.vue";
import { createPinia } from "pinia";

import { defineCustomElement } from "vue";

const pinia = createPinia();

createApp(App).use(pinia).mount("#location-app");

const locationApp = defineCustomElement(App);
customElements.define("location-app", locationApp);
