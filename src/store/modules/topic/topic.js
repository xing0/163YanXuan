// topic 的store
import {SETPICTABS,SETPICPAGES} from '../../mutation-types'
import {reqTopicTabs,reqTopicJSON} from '../../../api'

const state = {
  tabs:[],
  topicPages:[],
}
const mutations = {
  //写入topic导航栏
  [SETPICTABS] (state,newTabs){
    state.tabs = newTabs
  },
  //写入列表数据
  [SETPICPAGES] (state,Pages){
    state.topicPages = Pages
  }
}
const actions = {
  //获取数据 再commit
  async getTabs({commit}){
    const res = await reqTopicTabs()
    commit(SETPICTABS,res.data)
  },
  async getPages({commit},page=0,size=5){
    const res = await reqTopicJSON({page,size})
    console.log(res)
    commit(SETPICPAGES,res.data)
  }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
