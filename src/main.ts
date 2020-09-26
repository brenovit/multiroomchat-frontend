import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");

app.mount("#app");
