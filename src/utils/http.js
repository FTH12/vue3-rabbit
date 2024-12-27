// axios 基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 10000
})

// 拦截器
httpInstance.interceptors.request.use(config =>{
    return config
}, e=> Promise.reject(e))

httpInstance.interceptors.response.use(res => res.data
    ,e=> {
      ElMessage.error(e.response.data.msg)
      return Promise.reject(e)
    })


export default httpInstance
