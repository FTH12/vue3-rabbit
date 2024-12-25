
import httpInstance from "@/utils/http"

export const getBannerAPI = () => {
  return httpInstance.get('/home/banner')
}

export const getNewAPI = () => {
  return httpInstance.get('/home/new')
}

export const getHotAPI = () => {
  return httpInstance.get('/home/hot')
}

export const getGoodsAPI = () => {
  return httpInstance.get('/home/goods')
}
