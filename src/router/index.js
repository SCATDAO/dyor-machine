import Vue from 'vue'
import VueRouter from 'vue-router'

import DyorGenerator from "../pages/DyorGenerator"


Vue.use(VueRouter)


const routes = [
  { path: '/', component: DyorGenerator },
  { path: '/show', component: DyorGenerator }
]

const router = new VueRouter({
  routes 
})


export default router