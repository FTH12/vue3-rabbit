// 把components中的所有组件进行全局化注册

import ImageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    // app.component('组件名称',组件对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}