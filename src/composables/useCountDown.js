// 封装倒计时函数
import { ref,onUnmounted } from 'vue'

export const useCountDown = ()=>{
  // 响应式数据
  const formatTime = ref('29分59秒')
  let timer = null
  // 倒计时函数
  const start = (currentTime)=>{
    const minute = parseInt(currentTime/60)
    const second = currentTime % 60
    formatTime.value = `${minute}分${second}秒`
    // 开始倒计时逻辑
    timer = setInterval(() => {
      --currentTime < 0 ? 0 : currentTime
      const minute = parseInt(currentTime/60)
      const second = currentTime % 60
      formatTime.value = `${minute < 10 ? '0' : ''}${minute}分${second < 10 ? '0' : ''}${second}秒`
      // 清除倒计时
      if(currentTime<1){
        clearInterval(timer)
        formatTime.value = '00分00秒'
      }
    }, 1000)
  }

  onUnmounted(()=>{
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
