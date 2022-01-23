import Vue from 'vue'
import VueRouter from 'vue-router'

import DyorGenerator from "../pages/DyorGenerator"


Vue.use(VueRouter)


const routes = [
  { path: '/', component: DyorGenerator, props: false },
  { path: '/show/:data', component: DyorGenerator, name: 'show', props: true },
  { path: '/download/:data', component: DyorGenerator, name: 'download', props: true },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router