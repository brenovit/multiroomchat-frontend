import { createApp } from "vue";
import App from "./App.vue";
import $ from "jquery";

const app = createApp(App);

window.jQuery = window.$ = $;

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");

app.mount("#app");
