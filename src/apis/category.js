import request from "@/utils/http"

export const getCategoryAPI = (id) =>{
  return request.get('/category',{
    params:{
      id
    }
  })
}
