import { loginAPI } from "@/apis/login"
import { defineStore } from "pinia"
import {ref} from 'vue'

export const useUserStore = defineStore('user',()=>{
  const userInfo = ref({})
  const loginAction = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
  }
  return {userInfo, loginAction}
},{
  persist:{
    enabled: true,
    pick: ['userInfo'],
  }
})
