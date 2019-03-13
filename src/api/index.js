//api 接口
import ajax from './ajax'

//topic 接口
//http://m.you.163.com/topic/v1/find/recAuto.json?page=20&size=10
//一共200条信息
//topic 导航标题
//http://m.you.163.com/topic/v1/find/getTabs.json
const M163 = '/api'
//获取homeJSON
export const reqHomeJSON = ()=> ajax('/homejson')

//获取toPic导航JSON
export const reqTopicTabs = ()=> ajax(M163+'/topic/v1/find/getTabs.json')

//获取toPicJSON
export const reqTopicJSON = ({page,size})=> ajax('/homejson',{page,size})

