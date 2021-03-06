import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
// import { VuelidatePlugin } from "@vuelidate/core";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(router)
// .use(VuelidatePlugin);

app.mount("#app");
