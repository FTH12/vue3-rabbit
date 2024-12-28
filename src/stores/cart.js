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

  const changeSelected = (skuId, selected) => {
    const item = cartList.value.find((item)=>item.skuId === skuId)
    item.selected = selected
  }
  // 计算属性
  const allCount = computed(()=>
    cartList.value.reduce((sumCount, item)=> sumCount+item.count, 0)
  )

  const allPrice = computed(()=>
    cartList.value.reduce((sumPrice, item)=> sumPrice+item.price*item.count,0)
  )

  const selectedCount = computed(()=>
    cartList.value.reduce((sumCount, item)=> {
      if(item.selected){
        sumCount+=1
      }
      return sumCount
    },0)
  )

  const selectAll = computed(()=>
    cartList.value.reduce((now, item)=> now && item.selected, true)
  )
  const changeAll = (allChange)=>{
    cartList.value.forEach((item)=> item.selected=allChange)
  }

  const selectPrice = computed(()=>
    cartList.value.reduce((sumPrice, item)=> item.selected ? sumPrice+item.price*item.count:sumPrice, 0)
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
    selectPrice
  }
},{
  persist:{
    enabled: true,
  }
})
