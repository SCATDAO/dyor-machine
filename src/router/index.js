import Vue from 'vue'
import VueRouter from 'vue-router'

import DyorSummary from "../pages/DyorSummary"
import DyorLanding from "../pages/DyorLanding"

Vue.use(VueRouter)


const routes = [
  { path: '/', component: DyorLanding, props: false },
  { path: '/report/:id', component: DyorSummary, name: 'report', props: true },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router