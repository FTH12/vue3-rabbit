import { loginAPI } from "@/apis/user"
import { defineStore } from "pinia"
import {ref} from 'vue'
import { useCartStore } from "./cart"

export const useUserStore = defineStore('user',()=>{
  const userInfo = ref({})
  const cartStore = useCartStore()
  const loginAction = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result
    cartStore.mergeCart()
    cartStore.getCart()

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
