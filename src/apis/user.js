import request from "@/utils/http"

export const loginAPI = (data) => {
  return request.post('/login',data)
}

export const getLikeListAPI = (limit=4) => {
  return request.get('/goods/relevant', {
    params: {
      limit
    }
  })
}
