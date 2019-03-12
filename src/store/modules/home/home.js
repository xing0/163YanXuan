//home 的store
import {SETHOMEDATE} from '../../mutation-types'
import {reqHomeJSON} from '../../../api'
const state = {
   homeData:{}
}
const mutations = {
  [SETHOMEDATE] (state , homeData){
    state.homeData = homeData
  }
}
const actions = {
  async setHomeDate({commit},homeData){
    const data = await reqHomeJSON()
    commit(SETHOMEDATE,data.data)
  }

}
const getters = {
  menuIdList: state => {
    // categoryName categoryId
    if (state.homeData.categoryHotSellModule) {
      const list = state.homeData.categoryHotSellModule.categoryList
      let menuIdList = {}
      for (var i = 2; i < list.length; i++) {
        menuIdList[list[i]['extra']['operationResource']['categoryName']] = list[i]['extra']['operationResource']['categoryId']

      }
      return menuIdList
    } else {
      return {}
    }
  },
  bannerPicList: state => {
    if (state.homeData.focusList) {
      const list = state.homeData.focusList
      let picList = []
      for (var i = 0; i < list.length; i++) {
        picList[i] = list[i].picUrl
      }
      return picList
    } else {
      return []
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
