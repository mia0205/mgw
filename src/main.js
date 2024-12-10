import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import './assets/css/common.css'
// 引入淘宝无限适配方案
import './assets/js/flexible'

createApp(App).use(router).mount('#app')
