import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueGoogleCharts from "vue-google-charts";
import VuePageTransition from "vue-page-transition";

Vue.use(VueMaterial);
Vue.use(VueGoogleCharts);
Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
