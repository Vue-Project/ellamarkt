import { createApp } from "vue";
// pinia
import { createPinia } from "pinia";
// Components
import App from "./App.vue";
import router from "./router";
// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// mitt
import mitt from "mitt";
const Emitter = mitt();

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App).use(createPinia()).use(vuetify).provide("Emitter", Emitter).use(router).mount("#app");
