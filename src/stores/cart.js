import { defineStore } from "pinia"
import { ref } from 'vue'
export const useCartStore = defineStore('cart',()=>{
  const cartList = ref([])

  const addCart = (goods) =>{
    // 添加购物车
    const item = cartList.value.find((item)=> goods.skuId === item.skuId )
    if(item){
      item.count += goods.count
    }else{
      cartList.value.push(goods)
    }
  }

  const delCart = (skuId) => {
    cartList.value = cartList.value.filter( (item)=> item.skuId !== skuId)
  }

  return {
    cartList,
    addCart,
    delCart
  }
},{
  persist:{
    enabled: true,
  }
})
