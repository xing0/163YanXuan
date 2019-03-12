//入口js,进入严选的世界!

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './pages'
import 'lib-flexible' //引入淘宝的rem适配
import store from './store'
import './mock'
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
  router,
  store
})

