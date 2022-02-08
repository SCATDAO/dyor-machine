import Vue from 'vue'
import VueRouter from 'vue-router'

import DyorSummary from "../pages/DyorSummary"


Vue.use(VueRouter)


const routes = [
  { path: '/', component: DyorSummary, props: false },
  { path: '/report/:id', component: DyorSummary, name: 'report', props: true },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router