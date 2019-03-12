import axios from 'axios'


export default function (url,data={},method="GET") {
    return new Promise((res,rej)=>{
      let promise
      if(method==="GET"){
        promise = axios.get(url,{params:data})
      }else{
        promise = axios.post(url,data)
      }
      promise.then(data=>res(data.data))
        .catch(err=>{
        console.log('axios请求出错');
      })
    })
}
