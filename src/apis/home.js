
import httpInstance from "@/utils/http"

export const getBannerAPI = (distributionSite='1') => {
  return httpInstance.get('/home/banner',{
    params:{
      distributionSite
    }
  })
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
