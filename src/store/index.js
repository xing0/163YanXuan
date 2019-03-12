import Vuex from'vuex'
import Vue from "vue"
import home from './modules/home/home'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home
  }
})
