import request from '@/utils/http'

export const getCheckoutAPI = () => {
  return request.get('/member/order/pre')
}


export const addAddressAPI = (data) => {
  return request.post('/member/address',data)
}

export const getAddressAPI = ()=>{
  return request.get('/member/address')
}

export const submitOrderAPI = (data)=>{
  return request.post('/member/order', data)
}

export const getOrderAPI = (id)=>{
  return request.get(`/member/order/${id}`)
}
