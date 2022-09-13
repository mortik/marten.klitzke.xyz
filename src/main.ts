import { createApp } from "vue";
import router from "@/lib/Router";
import pinia from "@/lib/Pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/pro-duotone-svg-icons";

library.add(fab);
library.add(faEnvelope);

import "./assets/main.scss";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
