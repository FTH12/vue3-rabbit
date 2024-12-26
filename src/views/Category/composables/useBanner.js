// 封装banner轮播图相关的代码
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

export const useBanner = () => {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI('2')
    bannerList.value = res.result
  }
  onMounted(() => getBanner('2'))

  return {
    bannerList
  }
}
