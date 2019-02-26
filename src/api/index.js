import Vue from 'vue'
import axios from 'axios'
import config from "./config"

// 将axios挂在到Vue原型上的$http上 
Vue.prototype.$http=axios

for(const k in config){
    axios.defaults[k]=config[k]
}

// 添加响应拦截
axios.interceptors.response.use(function(response){
    response=response.data
    return response
},function(error){
    // 对响应错误做点什么
    return Promise.reject(error)
})





export default axios