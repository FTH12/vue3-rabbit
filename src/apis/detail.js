import request from '@/utils/http'

export const getDetail = (id) => {
  return request.get('/goods',{
    params:{
      id
    }
  })
}
