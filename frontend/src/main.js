import { createApp } from "vue";
import { createPinia } from "pinia";
import "axios";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import axios from "axios";

axios.defaults.baseURL = "127.0.0.1:8000";
const app = createApp(App);

app.use(createPinia());
app.use(router, axios);
app.mount("#app");
