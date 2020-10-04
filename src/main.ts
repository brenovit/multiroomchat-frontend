import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
const app = createApp(App);

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");

app.use(router);
app.mount("#app");
