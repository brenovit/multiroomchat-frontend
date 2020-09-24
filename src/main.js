import Vue from "vue";
import App from "./App.vue";
import $ from "jquery";
import LoadScript from "vue-plugin-load-script";

Vue.use(LoadScript);
window.jQuery = window.$ = $;

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");

Vue.config.productionTip = false;
Vue.loadScript("/js/swipe.min.js");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
