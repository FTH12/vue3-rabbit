import request from '@/utils/http'

export const getDetail = (id) => {
  return request.get('/goods',{
    params:{
      id
    }
  })
}

export const getHotGoodsAPI = ({ id, type, limit =3 }) => {
  return request.get('/goods/hot',{
    params: {
      id,
      type,
      limit
    }
  })
}
