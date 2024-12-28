import { defineStore } from "pinia"
import { ref, computed } from 'vue'
import { useUserStore } from "./user"
import { addCartAPI, delCartAPI, getCartAPI, mergeCartAPI, updateCartAPI } from "@/apis/cart"
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const userStore = useUserStore()

  const addCart = async (goods) => {
    if (userStore.userInfo.token) {
      // 登录之后的加入购物车逻辑
      await addCartAPI(goods)
    }
    // 添加购物车
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count += goods.count
    } else {
      cartList.value.push(goods)
    }

  }
  const getCart = async ()=>{
    if (userStore.userInfo.token){
      const cartRes = await getCartAPI()
      cartList.value = cartRes.result
    }
  }
  const delCart = async (skuId) => {
    if (userStore.userInfo.token) {
      // 登录之后的删除购物车逻辑
      await delCartAPI([skuId])
    }
    cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
  }

  const updateCartCount = async (count, skuId) => {
    const item = cartList.value.find((item) => skuId === item.skuId)
    item.count = count
    await updateCartAPI(item.skuId, item)
  }

  const clearCart = ()=> {
    cartList.value = []
  }

  const mergeCart = async ()=> {
    await mergeCartAPI(cartList.value)
  }

  const changeSelected = async (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
    await updateCartAPI(item.skuId, item)
  }
  // 计算属性
  const allCount = computed(() =>
    cartList.value.reduce((sumCount, item) => sumCount + item.count, 0)
  )

  const allPrice = computed(() =>
    cartList.value.reduce((sumPrice, item) => sumPrice + item.price * item.count, 0)
  )

  const selectedCount = computed(() =>
    cartList.value.reduce((sumCount, item) => {
      if (item.selected) {
        sumCount += 1
      }
      return sumCount
    }, 0)
  )

  const selectAll = computed(() =>
    cartList.value.reduce((now, item) => now && item.selected, true)
  )
  const changeAll = (allChange) => {
    cartList.value.forEach((item) => item.selected = allChange)
  }

  const selectPrice = computed(() =>
    cartList.value.reduce((sumPrice, item) => item.selected ? sumPrice + item.price * item.count : sumPrice, 0)
  )
  return {
    cartList,
    addCart,
    delCart,
    changeSelected,
    allCount,
    allPrice,
    selectedCount,
    selectAll,
    changeAll,
    selectPrice,
    getCart,
    clearCart,
    mergeCart,
    updateCartCount
  }
}, {
  persist: {
    enabled: true,
  }
})
