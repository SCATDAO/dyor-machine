import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'

import store from './store'
import router from "./router"


Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
