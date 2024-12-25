// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的元素 img
        // bingding: binding.value 指令的值
        // console.log(el,binding.value)
        const test = useIntersectionObserver(el, ([entry]) => {
          // el监听的元素，entry实体数据
          if (entry.isIntersecting) {
            el.src = binding.value
            test.stop()
          }
        })
      }
    })

  }
}
