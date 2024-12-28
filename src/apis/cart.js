import request from '@/utils/http'

export const addCartAPI = ({skuId, count}) => {
  return request.post('/member/cart',{
    skuId,
    count
  })
}

export const getCartAPI = () => {
  return request.get('/member/cart')
}

export const mergeCartAPI = (cartList) => {
  return request.post('/member/cart/merge',cartList)
}

export const delCartAPI = (ids)=>{
  return request.delete('/member/cart',{
    data:{
      ids
    }
  })
}

export const updateCartAPI = (id, {selected, count}) => {
  return request.put(`/member/cart/${id}`,{
    data:{
      selected,
      count
    }
  })
}
