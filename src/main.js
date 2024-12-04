import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { test } from './apis/testAPI'
test().then(res=>{
    console.log(res);
    
})
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
