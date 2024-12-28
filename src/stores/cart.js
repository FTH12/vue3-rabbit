import { defineStore } from "pinia"
import { ref, computed } from 'vue'
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

  // 计算属性
  const allCount = computed(()=>
    cartList.value.reduce((sumCount, item)=> sumCount+item.count, 0)
  )

  const allPrice = computed(()=>
    cartList.value.reduce((sumPrice, item)=> sumPrice+item.price*item.count,0)
  )

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
  }
},{
  persist:{
    enabled: true,
  }
})
