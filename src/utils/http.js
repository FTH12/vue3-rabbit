// axios 基础的封装
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import router from '@/router'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 10000
})

// 拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, e => Promise.reject(e))

httpInstance.interceptors.response.use(res => res.data
  , e => {
    ElMessage.error(e.response.data.msg)
    // 401 token失效处理
    if(e.response.status === 401){
      const userStore = useUserStore()
      userStore.clearUser()
      router.replace('/login')
    }

    return Promise.reject(e)
  })


export default httpInstance
