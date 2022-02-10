import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from "./router"

import VueApexCharts from 'vue-apexcharts'
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
