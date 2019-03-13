import Vuex from'vuex'
import Vue from "vue"
import home from './modules/home/home'
import category from './modules/category/category'
import topic from './modules/topic/topic'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    category,
    topic
  }
})
