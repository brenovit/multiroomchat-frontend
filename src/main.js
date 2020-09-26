import Vue, { createApp } from "vue";
import App from "./App.vue";
import $ from "jquery";
import LoadScript from "vue-plugin-load-script";

Vue.use(LoadScript);
window.jQuery = window.$ = $;

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");

Vue.loadScript("/js/swipe.min.js");

createApp(App).mount("#app");
