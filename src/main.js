import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
// 引入初始化样式文件
import '@/styles/common.scss'

// // 引入懒加载指令插件并且注册
// import { lazyPlugin } from '@/directives'
// // 引入全局组件插件
// import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia = createPinia()
// 注册持久化插件
// pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
// app.use(lazyPlugin)
// app.use(componentPlugin)
app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding){
    // el: 指令绑定的元素 img
    // bingding: binding.value 指令的值
    // console.log(el,binding.value)
    const test = useIntersectionObserver(el, ([entry])=>{
      // el监听的元素，entry实体数据
      if(entry.isIntersecting){
        el.src = binding.value
        test.stop()
      }
    })
  }
})



