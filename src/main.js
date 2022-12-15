import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import store from "./store/index";
import { format } from "date-fns";

loadFonts();

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);
app.config.globalProperties.$filters = {
  niceDate(value) {
    return format(new Date(value), "MMM d");
  },
  niceHourlyDate(value) {
    return format(new Date(value), "kk:mm");
  },
};

app.mount("#app");
