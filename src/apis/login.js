import request from "@/utils/http"

export const loginAPI = (data) => {
  return request.post('/login',data)
}
