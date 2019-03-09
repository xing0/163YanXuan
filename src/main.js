//入口js,进入严选的世界!

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './pages'

Vue.use(VueRouter)
const router = new VueRouter({
  mode:"history",
  routes
})
new Vue({
  el:"#app",
  components:{
    App,
  },
  template:"<App/>",
  router
})

