import request from "@/utils/http"

export const getCategoryAPI = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}

export const getCategoryFilterAPI = (id) => {
  return request.get('/category/sub/filter',{
    params: {
      id
    }
  })
}
