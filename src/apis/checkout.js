import request from '@/utils/http'

export const getCheckoutAPI = () => {
  return request.get('/member/order/pre')
}
