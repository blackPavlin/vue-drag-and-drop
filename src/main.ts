import { createApp } from "vue";
import App from "./App.vue";

import "normalize.css"
import store from './store'

createApp(App).use(store).mount("#app");
