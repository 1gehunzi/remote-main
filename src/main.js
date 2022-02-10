import dayjs from "dayjs";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

window.__RUNTIME_EXPORTS__ = {};
window.__RUNTIME_EXPORTS__.dayjs = dayjs;
