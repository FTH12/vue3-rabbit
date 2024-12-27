import { loginAPI } from "@/apis/login"
import { defineStore } from "pinia"
import {ref} from 'vue'

export const useUserStore = defineStore('user',()=>{
  const userInfo = ref({})
  const loginAction = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
  }
  const clearUser  = () => {
    userInfo.value = {}
  }
  return {userInfo, loginAction, clearUser}
},{
  persist:{
    enabled: true,
    pick: ['userInfo'],
  }
})
